import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

type TableHeadProps = PropsWithChildren &
  HTMLAttributes<HTMLTableSectionElement>;

export const Head: FC<TableHeadProps> = ({ children, ...props }) => {
  return (
    <thead aria-label="table head" {...props}>
      {children}
    </thead>
  );
};

Head.displayName = 'Table.Head';
