import type { FC, PropsWithChildren, TableHTMLAttributes } from 'react';

import { Body } from './components/Body/Body';
import { Cell } from './components/Cell/Cell';
import { Foot } from './components/Foot/Foot';
import { Head } from './components/Head/Head';
import { HeadCell } from './components/HeadCell/HeadCell';
import { Row } from './components/Row/Row';

import { StyledTable } from './Table.styles';

type TableProps = PropsWithChildren & TableHTMLAttributes<HTMLTableElement>;

const _Table: FC<TableProps> = ({ children, ...props }) => {
  return <StyledTable {...props}>{children}</StyledTable>;
};

export const Table = Object.assign(_Table, {
  Body,
  Cell,
  Foot,
  Head,
  HeadCell,
  Row,
});
