import { styled } from '@linaria/react';

import type { ButtonProps } from './Button';
import {
  BACKGROUND_COLORS,
  BACKGROUND_HOVERED_COLORS,
  BORDER_COLORS,
  FONT_COLORS,
} from './constants';

export const StyledButton = styled.button<ButtonProps>`
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  user-select: none;
  transition: background-color 0.15s ease-in-out;

  padding: ${(props) => (props.variant === 'link' ? 0 : '0.375rem 0.75rem')};
  background-color: ${(props) => BACKGROUND_COLORS[props.variant]};
  border-color: ${(props) => BORDER_COLORS[props.variant]};
  color: ${(props) => FONT_COLORS[props.variant]};

  &:hover:not(:disabled) {
    background-color: ${(props) => BACKGROUND_HOVERED_COLORS[props.variant]};
    text-decoration: ${(props) =>
      props.variant === 'link' ? 'underline' : 'none'};
  }

  &:disabled {
    opacity: 0.5;
  }
`;
