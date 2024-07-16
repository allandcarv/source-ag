import type { FC, HTMLAttributes } from 'react';

import { SpinnerOverlay, StyledSpinner } from './Spinner.styles';

type SpinnerProps = HTMLAttributes<HTMLDivElement>;

export const Spinner: FC<SpinnerProps> = (props) => (
  <SpinnerOverlay {...props}>
    <StyledSpinner />
  </SpinnerOverlay>
);
