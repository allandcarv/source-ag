import type { FC } from 'react';

import { StyledHeader, StyledLink, StyledList } from './Navigation.styles';

export const Navigation: FC = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
        </StyledList>
      </nav>
    </StyledHeader>
  );
};
