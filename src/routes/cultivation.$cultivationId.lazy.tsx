import { createLazyFileRoute } from '@tanstack/react-router';

import { CultivationTeam } from '../pages/CultivationTeam';

export const Route = createLazyFileRoute('/cultivation/$cultivationId')({
  component: CultivationTeam,
});
