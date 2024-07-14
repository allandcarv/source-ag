import { styled } from '@linaria/react';

export const StyledOverlay = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDialog = styled.dialog`
  display: block;
  position: relative;
  border: 0;
  border-radius: 0.25rem;
  max-width: 80%;
  max-height: 80%;
`;
