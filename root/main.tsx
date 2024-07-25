import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AdminApp } from '#apps/admin';
import { MainApp } from '#apps/main';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <MainApp />,
  },
  {
    path: '/admin/*',
    element: <AdminApp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
