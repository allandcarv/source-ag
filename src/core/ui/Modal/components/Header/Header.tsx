import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { StyledHeader } from './Header.styles';
import { CrossIcon } from '../../../CrossIcon/CrossIcon';

export interface HeaderProps
  extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  onClose: () => void;
}

export const Header: FC<HeaderProps> = ({ onClose, children, ...props }) => {
  return (
    <StyledHeader {...props}>
      {children}
      <CrossIcon onClick={onClose} />
    </StyledHeader>
  );
};

Header.displayName = 'Modal.Header';
