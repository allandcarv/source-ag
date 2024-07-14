import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { StyledTHead } from './Head.styles';

type TableHeadProps = PropsWithChildren &
  HTMLAttributes<HTMLTableSectionElement>;

export const Head: FC<TableHeadProps> = ({ children, ...props }) => {
  return (
    <StyledTHead aria-label="table head" {...props}>
      {children}
    </StyledTHead>
  );
};

Head.displayName = 'Table.Head';
