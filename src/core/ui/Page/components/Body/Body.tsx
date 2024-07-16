import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { StyledBody } from './Body.styles';

export type BodyProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export const Body: FC<BodyProps> = ({ children, ...props }) => (
  <StyledBody {...props}>{children}</StyledBody>
);

Body.displayName = 'Page.Body';
