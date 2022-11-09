import api from './api';

const URLS = {
  fetchTasksUrl: 'tasks',
};

export type Task = {
  id: number;
  body: string;
  isCompleted: boolean;
};

export const fetchTasks = () => {
  return api.get<Task[]>(URLS.fetchTasksUrl);
};
