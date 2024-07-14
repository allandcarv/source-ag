import type { FC } from 'react';

import { CultivationTeam } from './pages/CultivationTeam/CultivationTeam';
import { QueryProvider } from './core/providers/QueryProvider';

export const App: FC = () => (
  <QueryProvider>
    <CultivationTeam />
  </QueryProvider>
);
