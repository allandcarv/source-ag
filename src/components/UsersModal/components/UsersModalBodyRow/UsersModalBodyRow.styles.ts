import { styled } from '@linaria/react';

export const StyledLI = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 1rem 0;
  transition: background-color 0.15s ease-in-out;

  &:last-of-type {
    padding-bottom: 0;
  }

  & > input {
    margin-right: 1rem;
    cursor: pointer;
  }

  &:hover {
    background-color: #f3f3f3;
  }
`;

export const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
