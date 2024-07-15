import type { FC } from 'react';

import { CultivationUsersTable } from '../components/UsersTable/UsersTable';

import { Page } from '../core/components/Page/Page';

// 94eb21dd-d0d2-4e30-b3b8-51be6c6fa699
export const CultivationTeam: FC = () => {
  return (
    <Page>
      <Page.Header>
        <h1>Cultivation Team</h1>
      </Page.Header>
      <Page.Body>
        <CultivationUsersTable />
      </Page.Body>
    </Page>
  );
};
