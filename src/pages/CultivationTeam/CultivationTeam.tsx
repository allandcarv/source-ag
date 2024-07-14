import type { FC } from 'react';

import { UsersTable } from '../../components/UsersTable/UsersTable';

import {
  StyledContainer,
  StyledHeader,
  StyledSection,
} from './CultivationTeam.styles';
import { useGetData } from '../../hooks/use-get-data';

export const CultivationTeam: FC = () => {
  useGetData();

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
