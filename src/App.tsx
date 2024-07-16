import type { FC } from 'react';

import { QueryProvider } from './core/providers/QueryProvider';
import { Navigation } from './components/Navigation/Navigation';
import { Outlet } from '@tanstack/react-router';
import { MutationsProvider } from './providers/MutationsProvider';

export const App: FC = () => (
  <>
    <Navigation />
    <QueryProvider>
      <MutationsProvider>
        <Outlet />
      </MutationsProvider>
    </QueryProvider>
  </>
);
