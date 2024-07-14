import { styled } from '@linaria/react';

interface StyledSpanColors {
  background: string;
  char: string;
}

export const StyledSpan = styled.span<StyledSpanColors>`
  border-radius: 50%;
  font-size: 1.1rem;
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.background};
  color: ${(props) => props.char};
`;
