import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { editTaskApi, Task } from 'src/api/taskApi';
import { useEditContext } from 'src/context/EditContext';

type EditTaskProps = {
  task: Task;
};

export const EditTask = ({ task }: EditTaskProps) => {
  const { setModalIsOpen } = useEditContext();
  const [editTask, setEditTask] = useState(task.body);
  const queryClient = useQueryClient();
  const editTaskMutation = useMutation(editTaskApi);

  const handleEdit = () => {
    editTaskMutation.mutate(
      { ...task, body: editTask },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['tasks'] });
          setModalIsOpen(false);
        },
      }
    );
  };
  return (
    <div className='flex w-full max-w-2xl flex-col gap-4 rounded-xl bg-slate-50 p-4'>
      <h1 className='text-4xl font-bold text-gray-700'>Edit Task</h1>
      <input
        value={editTask}
        onChange={(e) => setEditTask(e.target.value)}
        type='text'
        className='w-full rounded-xl border-gray-400 font-bold text-gray-700   focus:border-teal-500 focus:ring-0'
      />
      <button
        onClick={handleEdit}
        className='ml-auto rounded-xl bg-teal-500 px-6 py-3 font-bold text-white transition-all hover:-translate-y-1 hover:bg-teal-600 active:scale-90'
      >
        Edit Task
      </button>
    </div>
  );
};
