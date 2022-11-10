import { TaskItem } from '@components';
import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from 'src/api/taskApi';
import { AddTask } from 'src/components/AddTask';
import { Spinner } from 'src/components/LazyLoader';

export const TasksPage = () => {
  const {
    data: tasks,
    isLoading,
    isSuccess,
  } = useQuery({ queryKey: ['tasks'], queryFn: fetchTasks });
  return (
    <main className='mx-auto flex h-screen max-w-3xl flex-col items-center justify-center gap-3'>
      <h1 className='mr-auto text-3xl font-bold text-violet-700'>Tasks</h1>
      <div className='w-full p-4'>
        <Spinner show={isLoading} delay={100} />

        {isSuccess && (
          <ul className='flex  flex-col'>
            {tasks?.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        )}

        <AddTask />
      </div>
    </main>
  );
};
