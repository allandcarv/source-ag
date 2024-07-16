import { styled } from '@linaria/react';

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.375rem 0.75rem;
  border: 2px solid #e7e7e7;
  border-radius: 0.25rem;
  font-size: 1.1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #8c8c8c;
  }
`;
