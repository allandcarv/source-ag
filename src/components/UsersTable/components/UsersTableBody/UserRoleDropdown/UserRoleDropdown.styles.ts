import { styled } from '@linaria/react';

export const StyledList = styled.ul`
  list-style: none;
`;

export const SyledListItem = styled.li`
  padding: 1rem;
  transition: background-color 0.15s ease-in-out;

  &:not(:last-of-type) {
    border-bottom: 1px solid #f3f3f3;
  }

  &:hover {
    background-color: #f3f3f3;
  }
`;
