import { Link } from '@tanstack/react-router';
import type { FC } from 'react';

import { StyledHeader, StyledList } from './Navigation.styles';

export const Navigation: FC = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledList>
          <li>Home</li>
          <li>Home</li>
        </StyledList>
      </nav>
    </StyledHeader>
  );
};
