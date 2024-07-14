import { styled } from '@linaria/react';

export const StyledCrossIcon = styled.i`
  position: relative;
  width: 20px;
  height: 20px;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
