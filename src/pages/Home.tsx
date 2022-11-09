import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className='flex h-screen w-full items-start justify-center'>
      <Link
        className='mt-16 text-4xl font-bold text-violet-500 transition-all hover:underline'
        to='/tasks'
      >
        Go To Tasks
      </Link>
    </div>
  );
};
