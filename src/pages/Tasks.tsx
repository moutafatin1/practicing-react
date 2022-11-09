import { TaskItem } from '@components';
import { AddTask } from 'src/components/AddTask';

export const TasksPage = () => {
  return (
    <main className='mx-auto flex h-screen max-w-3xl flex-col items-center justify-center gap-3'>
      <h1 className='mr-auto text-3xl font-bold text-violet-700'>Tasks</h1>
      <div className='w-full p-4'>
        <ul className='flex  flex-col'>
          <TaskItem
            task={{
              body: 'Task from here',
              isCompleted: true,
              id: 1,
            }}
          />
        </ul>
        <AddTask />
      </div>
    </main>
  );
};
