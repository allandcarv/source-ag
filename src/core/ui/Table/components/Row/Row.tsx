import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { StyledTR } from './Row.styles';

type TableRowProps = PropsWithChildren & HTMLAttributes<HTMLTableRowElement>;

export const Row: FC<TableRowProps> = ({ children, ...props }) => {
  return <StyledTR {...props}>{children}</StyledTR>;
};

Row.displayName = 'Table.Row';
