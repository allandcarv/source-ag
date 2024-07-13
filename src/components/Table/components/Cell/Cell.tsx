import type { FC, PropsWithChildren, TdHTMLAttributes } from 'react';

import { StyledTD } from './Cell.styles';

type TableCellProps = PropsWithChildren &
  TdHTMLAttributes<HTMLTableCellElement>;

export const Cell: FC<TableCellProps> = ({ children, ...props }) => {
  return <StyledTD {...props}>{children}</StyledTD>;
};

Cell.displayName = 'Table.Cell';
