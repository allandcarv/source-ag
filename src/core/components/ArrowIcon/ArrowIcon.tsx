import type { FC, HTMLAttributes } from 'react';

import { StyledArrowIcon } from './ArrowIcon.styles';

export interface ArrowIconProps extends HTMLAttributes<HTMLElement> {
  collapsed: boolean;
}

export const ArrowIcon: FC<ArrowIconProps> = ({ collapsed, ...props }) => (
  <StyledArrowIcon collapsed={collapsed} {...props} />
);
