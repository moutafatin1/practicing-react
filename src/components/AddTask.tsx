import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { addNewTask } from 'src/api/taskApi';

export const AddTask = () => {
  const [task, setTask] = useState('');
  const addTaskMutation = useMutation(addNewTask);
  const queryClient = useQueryClient();

  const onSubmit = () => {
    addTaskMutation.mutate(task, {
      onSuccess: () => {
        setTask('');
        queryClient.invalidateQueries({ queryKey: ['tasks'] });
      },
    });
  };

  return (
    <div className='flex items-center border-t  py-2'>
      <IoMdAddCircle className='h-8 w-8 text-violet-500' />
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type='text'
        placeholder='Insert new task...'
        className='flex-grow border-none bg-transparent text-xl font-bold text-gray-800 placeholder:text-gray-400/60 focus:ring-0'
      />
      <button
        onClick={onSubmit}
        className='rounded-xl bg-violet-500 px-6 py-2 font-bold text-white transition-all hover:-translate-y-1 hover:bg-violet-600 active:scale-90'
      >
        {addTaskMutation.isLoading ? 'Adding task...' : 'Add Task'}
      </button>
    </div>
  );
};
