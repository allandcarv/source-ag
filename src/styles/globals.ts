import { css } from '@linaria/core';

export const globals = css`
  :global() {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body,
    #root {
      width: 100%;
      height: 100%;
      background-color: #f6f9f3;
    }

    button {
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;
