import type { FC, PropsWithChildren, ThHTMLAttributes } from 'react';

type TableHeadCellProps = PropsWithChildren &
  ThHTMLAttributes<HTMLTableCellElement>;

export const HeadCell: FC<TableHeadCellProps> = ({ children, ...props }) => {
  return <th {...props}>{children}</th>;
};

HeadCell.displayName = 'Table.HeadCell';
