import { TaskItem } from '@components';
import { useEffect, useState } from 'react';
import { GiSpinningBlades } from 'react-icons/gi';
import { fetchTasks, Task } from 'src/api/taskApi';
import { AddTask } from 'src/components/AddTask';
import { withAsync } from 'src/helpers/withAsync';

type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

const useFetchTasks = () => {
  const [tasks, setTasks] = useState<Task[]>();
  const [fetchTasksStatus, setFetchTasksStatus] = useState<ApiStatus>('IDLE');

  const initFetchTasks = async () => {
    setFetchTasksStatus('PENDING');
    const { error, response } = await withAsync(() => fetchTasks());
    if (error) {
      setFetchTasksStatus('ERROR');
    } else {
      setTasks(response?.data);
      setFetchTasksStatus('SUCCESS');
    }
  };

  useEffect(() => {
    initFetchTasks();
  }, []);

  return {
    tasks,
    initFetchTasks,
    isLoading: fetchTasksStatus === 'IDLE' || fetchTasksStatus === 'PENDING',
    isPending: fetchTasksStatus === 'PENDING',
    isError: fetchTasksStatus === 'ERROR',
  };
};

export const TasksPage = () => {
  const { tasks, isError, isLoading, isPending } = useFetchTasks();
  return (
    <main className='mx-auto flex h-screen max-w-3xl flex-col items-center justify-center gap-3'>
      <h1 className='mr-auto text-3xl font-bold text-violet-700'>Tasks</h1>
      <div className='w-full p-4'>
        {isLoading ? (
          <GiSpinningBlades className='mx-auto my-2 animate-spin text-7xl text-violet-500' />
        ) : (
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
