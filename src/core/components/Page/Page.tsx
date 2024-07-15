import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { Body } from './components/Body/Body';
import { Header } from './components/Header/Header';

import { StyledContainer } from './Page.styles';

type PageProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

const _Page: FC<PageProps> = ({ children, ...props }) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

export const Page = Object.assign(_Page, { Body, Header });
