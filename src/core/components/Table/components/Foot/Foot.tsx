import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

type TableFootProps = PropsWithChildren &
  HTMLAttributes<HTMLTableSectionElement>;

export const Foot: FC<TableFootProps> = ({ children, ...props }) => {
  return (
    <tfoot aria-label="table foot" {...props}>
      {children}
    </tfoot>
  );
};

Foot.displayName = 'Table.Foot';
