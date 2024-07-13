import type { FC, PropsWithChildren, TdHTMLAttributes } from 'react';

type TableCellProps = PropsWithChildren &
  TdHTMLAttributes<HTMLTableCellElement>;

export const Cell: FC<TableCellProps> = ({ children, ...props }) => {
  return <td {...props}>{children}</td>;
};

Cell.displayName = 'Table.Cell';
