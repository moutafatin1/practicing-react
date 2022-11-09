import { TaskItem } from '@components';
import { useEffect, useState } from 'react';
import { GiSpinningBlades } from 'react-icons/gi';
import { ERROR, PENDING, SUCCESS } from 'src/api/constants/apiStatus';
import { useApiStatus } from 'src/api/hooks/useApiStatus';
import { fetchTasks, Task } from 'src/api/taskApi';
import { AddTask } from 'src/components/AddTask';
import { withAsync } from 'src/helpers/withAsync';

const useFetchTasks = () => {
  const [tasks, setTasks] = useState<Task[]>();
  const { isError, isIdle, isPending, isSuccess, setStatus, status } =
    useApiStatus();

  const initFetchTasks = async () => {
    setStatus(PENDING);
    const { error, response } = await withAsync(() => fetchTasks());
    if (error) {
      setStatus(ERROR);
    } else if (response) {
      setTasks(response.data);
      setStatus(SUCCESS);
    }
  };

  useEffect(() => {
    initFetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    tasks,
    initFetchTasks,
    isIdle,
    isError,
    isPending,
    isSuccess,
    status,
  };
};

export const TasksPage = () => {
  const { tasks, isPending, isIdle } = useFetchTasks();
  return (
    <main className='mx-auto flex h-screen max-w-3xl flex-col items-center justify-center gap-3'>
      <h1 className='mr-auto text-3xl font-bold text-violet-700'>Tasks</h1>
      <div className='w-full p-4'>
        {isPending && isIdle ? (
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
