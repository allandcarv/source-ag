import type { FC, HTMLAttributes } from 'react';

import { StyledArrow } from './ArrowIcon.styles';

export interface ArrowIconProps extends HTMLAttributes<HTMLElement> {
  collapsed: boolean;
}

export const ArrowIcon: FC<ArrowIconProps> = ({ collapsed, ...props }) => (
  <StyledArrow collapsed={collapsed} {...props} />
);
