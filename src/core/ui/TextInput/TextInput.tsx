import type { FC, InputHTMLAttributes } from 'react';

import { StyledInput } from './TextInput.styles';

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const TextInput: FC<TextInputProps> = (props) => {
  return <StyledInput type="text" {...props} />;
};
