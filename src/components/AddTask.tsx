import { IoMdAddCircle } from 'react-icons/io';

export const AddTask = () => {
  return (
    <div className='flex items-center border-t  py-2'>
      <IoMdAddCircle className='h-8 w-8 text-violet-500' />
      <input
        type='text'
        placeholder='Insert new task...'
        className='flex-grow border-none bg-transparent text-xl font-bold text-gray-800 placeholder:text-gray-400/60 focus:ring-0'
      />
      <button className='rounded-xl bg-violet-500 px-6 py-2 font-bold text-white transition-colors transition-transform hover:-translate-y-1 hover:bg-violet-600 active:scale-90'>
        Add Task
      </button>
    </div>
  );
};
