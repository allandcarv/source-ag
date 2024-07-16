import type { ButtonVariants } from './Button';

export const BORDER_COLORS = Object.freeze<Record<ButtonVariants, string>>({
  light: '#DFDFDF',
  link: 'transparent',
  primary: '#007bff',
  secondary: '#6c757d',
});

export const BACKGROUND_COLORS = Object.freeze<Record<ButtonVariants, string>>({
  light: 'transparent',
  link: 'transparent',
  primary: '#007bff',
  secondary: '#6c757d',
});

export const BACKGROUND_HOVERED_COLORS = Object.freeze<
  Record<ButtonVariants, string>
>({
  light: '#e2e6ea',
  link: 'transparent',
  primary: '#0069d9',
  secondary: '#5a6268',
});

export const FONT_COLORS = Object.freeze<Record<ButtonVariants, string>>({
  light: '#2C2C2C',
  link: '#2A97FE',
  primary: '#fff',
  secondary: '#fff',
});
