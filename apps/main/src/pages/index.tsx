import { LinkProps, Navbar } from '@packages/ui';
import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { UserCard } from '#components/UserCard';

const config: RouteObject[] = [
  {
    index: true,
    element: (
      <div>
        <h2>Home</h2>
        <UserCard />
      </div>
    ),
  },
  {
    path: `/shop`,
    element: <h2>Shop</h2>,
  },
  {
    path: `/cart`,
    element: <h2>Cart</h2>,
  },
  {
    path: '*',
    element: <h1>404</h1>,
  },
];

function Pages() {
  const routes = useRoutes(config);

  const links: LinkProps[] = [
    { to: '/', text: 'Home' },
    { to: '/shop', text: 'Shop' },
    { to: '/cart', text: 'Cart' },
    { to: '/admin', text: 'Admin' },
  ];

  return (
    <div>
      <Navbar links={links} />
      <h1>Main app</h1>
      {routes}
    </div>
  );
}

export default Pages;
