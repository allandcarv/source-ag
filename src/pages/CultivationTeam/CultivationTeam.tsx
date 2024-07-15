import type { FC } from 'react';

import { UsersTable } from '../../components/UsersTable/UsersTable';

import {
  StyledContainer,
  StyledHeader,
  StyledSection,
} from './CultivationTeam.styles';

export const CultivationTeam: FC = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Cultivation Team</h1>
      </StyledHeader>
      <StyledSection>
        <UsersTable />
      </StyledSection>
    </StyledContainer>
  );
};
