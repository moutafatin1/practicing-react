import { useEffect, useState } from 'react';
import { GiSpinningBlades } from 'react-icons/gi';

type SpinnerProps = {
  show: boolean;
  delay?: number;
};
export const Spinner = ({ show, delay }: SpinnerProps) => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!show) {
      setShowSpinner(false);
      return undefined;
    }

    if (delay === 0) {
      setShowSpinner(true);
    } else {
      timeout = setTimeout(() => setShowSpinner(true), delay);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [show, delay]);
  return showSpinner ? (
    <GiSpinningBlades className='mx-auto my-2 animate-spin text-7xl text-violet-500' />
  ) : null;
};
