import type { FC, PropsWithChildren, ThHTMLAttributes } from 'react';

import { StyledTH } from './HeadCell.styles';

type TableHeadCellProps = PropsWithChildren &
  ThHTMLAttributes<HTMLTableCellElement>;

export const HeadCell: FC<TableHeadCellProps> = ({ children, ...props }) => {
  return <StyledTH {...props}>{children}</StyledTH>;
};

HeadCell.displayName = 'Table.HeadCell';
