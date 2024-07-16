import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { StyledFooter } from './Footer.styles';

type FooterProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export const Footer: FC<FooterProps> = ({ children, ...props }) => {
  return <StyledFooter {...props}>{children}</StyledFooter>;
};

Footer.displayName = 'Modal.Footer';
