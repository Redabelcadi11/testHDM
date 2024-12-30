import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/tasks',
});

export const getTasks = async () => {
  const response = await api.get('/');
  return response.data;
};

export const createTask = async (task: { title: string; description?: string }) => {
  const response = await api.post('/', task);
  return response.data;
};

export const updateTask = async (id: number, task: Partial<{ title: string; description?: string; completed?: boolean }>) => {
  const response = await api.put(`/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: number) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};
