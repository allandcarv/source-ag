import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { StyledButton } from './Button.styles';

export type ButtonVariants = 'primary' | 'secondary' | 'light' | 'link';

export interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({ variant, children, ...props }) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);
