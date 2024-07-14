import { styled } from '@linaria/react';

export const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  & > li:not(:last-of-type) {
    border-bottom: 1px solid #f1f1f1;
  }
`;
