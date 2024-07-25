import { lazy } from 'react';

export const MainApp = lazy(async () => await import('../pages'));
