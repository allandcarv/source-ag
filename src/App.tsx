import type { FC } from 'react';

import { QueryProvider } from './core/providers/QueryProvider';
import { Navigation } from './components/Navigation/Navigation';
import { Outlet } from '@tanstack/react-router';

export const App: FC = () => (
  <>
    <Navigation />
    <QueryProvider>
      <Outlet />
    </QueryProvider>
  </>
);
