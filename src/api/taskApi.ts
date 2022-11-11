import api from './api';

const URLS = {
  fetchTasksUrl: 'tasks',
};

export type Task = {
  id: number;
  body: string;
  isCompleted: boolean;
};

export const fetchTasks = async () => {
  const response = await api.get<Task[]>(URLS.fetchTasksUrl);
  return response.data;
};

export const addNewTask = (task: string) =>
  api.post<Task>('tasks', {
    body: task,
    isCompleted: false,
  });

export const deleteTask = (id: number) => api.delete(`tasks/${id}`);
export const editTaskApi = (task: Partial<Task>) =>
  api.patch(`tasks/${task.id}`, {
    ...task,
  });
