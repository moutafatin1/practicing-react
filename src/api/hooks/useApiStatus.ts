import { useMemo, useState } from 'react';
import { ApiStatus, defaultApiStatuses, IDLE } from '../constants/apiStatus';

type Statuses = Record<`is${Capitalize<Lowercase<ApiStatus>>}`, boolean>;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const prepareStatuses = (currentStatus: ApiStatus): Statuses => {
  const statuses = {} as Statuses;
  defaultApiStatuses.forEach((status) => {
    const normalizedStatus = capitalize(status.toLowerCase());
    const normalizedStatusKey = `is${normalizedStatus}` as keyof Statuses;
    statuses[normalizedStatusKey] = status === currentStatus;
  });

  return statuses;
};

export const useApiStatus = (currentStatus: ApiStatus = IDLE) => {
  const [status, setStatus] = useState<ApiStatus>(currentStatus);
  const statuses = useMemo(() => prepareStatuses(status), [status]);

  return {
    status,
    setStatus,
    ...statuses,
  };
};
