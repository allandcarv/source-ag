import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

type TableBodyProps = PropsWithChildren &
  HTMLAttributes<HTMLTableSectionElement>;

export const Body: FC<TableBodyProps> = ({ children, ...props }) => {
  return (
    <tbody aria-label="table body" {...props}>
      {children}
    </tbody>
  );
};

Body.displayName = 'Table.Body';
