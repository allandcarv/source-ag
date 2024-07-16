import type { FC } from 'react';

import { Page } from '../core/ui/Page/Page';
import { CultivationsTable } from '../components/CultivationsTable/CultivationsTable';

export const Cultivations: FC = () => {
  return (
    <Page>
      <Page.Header>
        <h1>Cultivations</h1>
      </Page.Header>
      <Page.Body>
        <CultivationsTable />
      </Page.Body>
    </Page>
  );
};
