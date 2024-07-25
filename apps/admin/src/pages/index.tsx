import { LinkProps, Navbar } from '@packages/ui';
import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

const config: RouteObject[] = [
  {
    index: true,
    path: '/',
    element: <h2>Admin page</h2>,
  },
  {
    path: '/users',
    element: <h2>All users</h2>,
  },
  {
    path: '*',
    element: <h1>404</h1>,
  },
];

function Pages() {
  const routes = useRoutes(config);

  const links: LinkProps[] = [
    { to: '/admin', text: 'Admin page' },
    { to: '/admin/users', text: 'All users' },
    { to: '/', text: 'Main app' },
  ];

  return (
    <div>
      <Navbar links={links} />
      <h1>Admin app</h1>
      {routes}
    </div>
  );
}

export default Pages;
