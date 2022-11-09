import { cn } from 'src/utils';

type TaskItemProps = {
  task: {
    id: number;
    body: string;
    isCompleted: boolean;
  };
};

export const TaskItem = ({ task: { body, isCompleted } }: TaskItemProps) => {
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
    </li>
  );
};
