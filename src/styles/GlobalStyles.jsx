import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

export default createGlobalStyle`
    ${fonts};

    :root {
        --color-primary: #ff631a;
        --color-dark: #31130a;
        --color-slate: #502714;
        --font-mono: 'SF Mono';
        --font-sans: 'Calibre';
/*         --color-primary: #64FFDA;
        --color-dark: #0A192F;
        --color-slate: #112240; */
        --color-gray: #ccd6f6;
        --color-slate-gray: #8892b0;
    }

    html {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    a {
        text-decoration: none;
        cursor: pointer !important;
    }

    body {
        display: flex;
        color: #000;
        background-color: var(--color-dark);
        -webkit-font-smoothing: antialiased;
    }

    #root {
        width: 100%;
    }

    .text-highlighted {
        color: var(--color-primary);
        font-weight: 500;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-slate);
        border: 2px solid var(--color-dark);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-slate-gray);
    }

`;
