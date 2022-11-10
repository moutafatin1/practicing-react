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
