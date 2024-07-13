import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

type TableRowProps = PropsWithChildren & HTMLAttributes<HTMLTableRowElement>;

export const Row: FC<TableRowProps> = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>;
};

Row.displayName = 'Table.Row';
