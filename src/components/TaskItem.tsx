import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IoMdTrash } from 'react-icons/io';
import { deleteTask } from 'src/api/taskApi';
import { cn } from 'src/utils';

type TaskItemProps = {
  task: {
    id: number;
    body: string;
    isCompleted: boolean;
  };
};

export const TaskItem = ({
  task: { body, isCompleted, id },
}: TaskItemProps) => {
  const queryClient = useQueryClient();
  const deleteTaskMutation = useMutation(deleteTask);
  const handleDelete = () => {
    deleteTaskMutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['tasks'] });
      },
    });
  };
  return (
    <li
      className={cn(
        'flex items-center gap-4 border-t  py-2 pl-1',
        isCompleted && 'text-gray-400 line-through'
      )}
    >
      <input
        checked={isCompleted}
        type='checkbox'
        className={cn(
          'h-6 w-6 rounded-full text-violet-500 hover:bg-gray-300 hover:text-violet-400 focus:ring-0 focus:ring-transparent',
          isCompleted && 'text-gray-400'
        )}
      />
      <span
        className={cn(
          'pointer-events-none text-xl font-medium text-gray-800',
          isCompleted && 'text-gray-400'
        )}
      >
        {body}
      </span>
      <button onClick={handleDelete} className='ml-auto outline-red-500'>
        <IoMdTrash className=' h-8 w-8 cursor-pointer text-red-500 transition-all hover:scale-90 hover:text-red-600 active:scale-100' />
      </button>
    </li>
  );
};
