import type { FC } from 'react';
import { useParams } from '@tanstack/react-router';

import { CultivationUsersTable } from '../components/UsersTable/UsersTable';
import { Page } from '../core/ui/Page/Page';
import { useGetCultivations } from '../hooks/use-get-cultivations';

// 94eb21dd-d0d2-4e30-b3b8-51be6c6fa699
export const CultivationTeam: FC = () => {
  const { cultivationId } = useParams({ strict: false });
  const { data } = useGetCultivations();

  const cultivation = data?.find((c) => c.id === cultivationId);

  return (
    <Page>
      <Page.Header>
        <h1>Cultivation Team{cultivation && ` - ${cultivation.name}`}</h1>
      </Page.Header>
      <Page.Body>
        <CultivationUsersTable />
      </Page.Body>
    </Page>
  );
};
