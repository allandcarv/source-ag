import type { FC } from 'react';

import { SpinnerOverlay, StyledSpinner } from './Spinner.styles';

export const Spinner: FC = () => (
  <SpinnerOverlay>
    <StyledSpinner />
  </SpinnerOverlay>
);
