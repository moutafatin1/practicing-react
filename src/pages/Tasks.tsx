import { TaskItem } from '@components';
import { useEffect, useState } from 'react';
import { fetchTasks, Task } from 'src/api/taskApi';
import { AddTask } from 'src/components/AddTask';

const useFetchTasks = () => {
  const [tasks, setTasks] = useState<Task[]>();
  const initFetchTasks = async () => {
    const response = await fetchTasks();
    setTasks(response.data);
  };

  useEffect(() => {
    initFetchTasks();
  }, []);

  return { tasks, initFetchTasks };
};

export const TasksPage = () => {
  const { tasks, initFetchTasks } = useFetchTasks();
  return (
    <main className='mx-auto flex h-screen max-w-3xl flex-col items-center justify-center gap-3'>
      <h1 className='mr-auto text-3xl font-bold text-violet-700'>Tasks</h1>
      <div className='w-full p-4'>
        <ul className='flex  flex-col'>
          {tasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
        <AddTask />
      </div>
    </main>
  );
};
