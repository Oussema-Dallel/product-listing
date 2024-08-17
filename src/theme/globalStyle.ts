import { css } from '@emotion/react';

const globalStyle = css`
    html {
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        text-size-adjust: 100%;
    }

    *, ::before, ::after {
    box-sizing: inherit;
    }

    body {
        margin: 0px;
        color: rgb(84, 87, 124);
        font-size: 16px;
        font-weight: 500;
        font-family: Montserrat, sans-serif;
        line-height: 1.5;
        background-color: rgb(245, 249, 255);
    }
`;

export { globalStyle };