import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { StyledHeader } from './Header.styles';

export type HeaderProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export const Header: FC<HeaderProps> = ({ children, ...props }) => (
  <StyledHeader {...props}>{children}</StyledHeader>
);

Header.displayName = 'Page.Header';
