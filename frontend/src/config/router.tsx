import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import TodoPage from '../components/TodoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Bienvenue sur l'application Todo</h1>,
  },
  {
    path: '/todo',
    element: <TodoPage />,
  },
]);

export default router;
