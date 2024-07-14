import { styled } from '@linaria/react';

import type { ArrowIconProps } from './ArrowIcon';

export const StyledArrow = styled.i<ArrowIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-top: 2px solid #959595;
    border-left: 2px solid #959595;
    margin: ${(props) => (props.collapsed ? '0 0 50% 0' : '50% 0 0 0')};
    transform: ${(props) =>
      props.collapsed ? 'rotate(-135deg)' : 'rotate(45deg)'};
  }
`;
