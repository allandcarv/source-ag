import { styled } from '@linaria/react';

export const StyledLI = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 1rem 0;

  &:last-of-type {
    padding-bottom: 0;
  }

  & > input {
    margin-right: 1rem;
  }

  & > span {
    margin-right: 0.5rem;
  }
`;
