import { createBrowserRouter, Navigate } from 'react-router-dom';
import { GitApp } from '../App';
import { IssueView, ListView, ListViewInfinite } from '../components/views';

export const router = createBrowserRouter([
  {
    path: '/issues',
    element: <GitApp />,
    children: [
      { path: 'list', element: <ListView /> },
      { path: 'issue/:id', element: <IssueView /> },
      { path: 'list/infinite', element: <ListViewInfinite /> },
      { path: '*', element: <Navigate to='list' /> },
    ],
  },
  {
    path: '/',
    element: <Navigate to='issues/list' />,
  },
  {
    path: '*',
    element: <h1>Not Found</h1>,
  },
]);
