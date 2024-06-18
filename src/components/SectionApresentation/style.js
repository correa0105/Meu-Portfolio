import styled from 'styled-components';

export const Section = styled.section`
    min-height: 100vh;
    max-width: 100rem;

    h1 {
        font-weight: 400;
        font-size: 1.7rem;
        color: var(--color-primary);
        margin-bottom: 1.5rem;
        font-family: var(--font-mono);
    }

    h2 {
        font-family: var(--font-sans);
        font-weight: 600;
        font-size: 7.8rem;
        color: var(--color-gray);
        margin: 0;
    }

    h3 {
        font-family: var(--font-sans);
        font-weight: 600;
        font-size: 7.8rem;
        color: var(--color-slate-gray);
        margin: -2rem 0 0 0;
    }

    p {
        width: 70%;
        margin: 1.5rem 0 1rem 0;
        font-family: var(--font-sans);
        font-weight: 400;
        font-size: 2rem;
        color: var(--color-slate-gray);
    }

    a {
        font-size: 1.4rem;
    }
`;
