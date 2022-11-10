import { useState } from 'react';
import { ERROR, PENDING, SUCCESS } from '../constants/apiStatus';
import { useApiStatus } from './useApiStatus';

type UseApiConfig<T> = {
  initialData?: T;
};

type ApiFunction<T = unknown> = (...args: unknown[]) => T | Promise<T>;

export function useApi<TData = unknown, TError = unknown>(
  fn: ApiFunction<TData>,
  config: UseApiConfig<TData> = {}
) {
  const { initialData } = config;
  const [data, setData] = useState<TData | undefined>(initialData);
  const [error, setError] = useState<TError | unknown>();
  const { status, setStatus, ...normalizedStatuses } = useApiStatus();

  const exec = async <A>(...args: A[]) => {
    try {
      setStatus(PENDING);
      const resultData = await fn(...args);
      setData(resultData);
      setStatus(SUCCESS);
      return {
        data,
        error: null,
      };
    } catch (e) {
      setError(e);
      setStatus(ERROR);
      return {
        error,
        data: null,
      };
    }
  };

  return {
    data,
    error,
    setData,
    status,
    setStatus,
    exec,
    ...normalizedStatuses,
  };
}
