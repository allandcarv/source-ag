import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { DropDownContainer } from './Dropdown.styles';

type DropdownProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const Dropdown: FC<DropdownProps> = ({ children, ...props }) => (
  <DropDownContainer {...props}>{children}</DropDownContainer>
);
