import { styled } from '@linaria/react';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  border: 2px solid #e7e7e7;
  border-radius: 0.25rem;
`;

export const StyledInput = styled.input`
  flex: 1 1 auto;
  padding: 0.375rem 0.75rem;
  border: none;
  font-size: 1.1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #8c8c8c;
  }
`;

export const StyledSpan = styled.span`
  padding: 0.375rem 0.75rem;
  border-left: 2px solid #e7e7e7;
`;
