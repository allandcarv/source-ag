import { createLazyFileRoute } from '@tanstack/react-router';

import { Cultivations } from '../pages/Cultivations';

export const Route = createLazyFileRoute('/')({
  component: Cultivations,
});
