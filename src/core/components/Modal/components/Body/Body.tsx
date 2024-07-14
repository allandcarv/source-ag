import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { StyledBody } from './Body.styles';

type BodyProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export const Body: FC<BodyProps> = ({ children, ...props }) => {
  return <StyledBody {...props}>{children}</StyledBody>;
};

Body.displayName = 'Modal.Body';
