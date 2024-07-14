import type { FC, HTMLAttributes } from 'react';

import { StyledCrossIcon } from './CrossIcon.styles';

type CrossIconProps = HTMLAttributes<HTMLElement>;

export const CrossIcon: FC<CrossIconProps> = (props) => (
  <StyledCrossIcon {...props} />
);
