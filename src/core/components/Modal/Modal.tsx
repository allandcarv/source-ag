import type { DialogHTMLAttributes, FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import { StyledDialog, StyledOverlay } from './Modal.styles';

interface ModalProps
  extends PropsWithChildren<DialogHTMLAttributes<HTMLDialogElement>> {
  onClose: () => void;
}

export const _Modal: FC<ModalProps> = ({ children, ...props }) => {
  const portalEl = document.getElementById('portal');

  if (!portalEl) {
    return null;
  }

  return createPortal(
    <StyledOverlay>
      <StyledDialog autoFocus {...props}>
        {children}
      </StyledDialog>
    </StyledOverlay>,
    portalEl
  );
};

export const Modal = Object.assign(_Modal, {
  Body,
  Footer,
  Header,
});
