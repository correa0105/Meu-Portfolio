import styled from 'styled-components';

export const Section = styled.section`
    max-width: 65rem;
    margin-top: 20rem;
    margin-bottom: 1rem;

    span {
        color: var(--color-slate-gray);
        font-size: 1.2rem;
        font-family: var(--font-mono);
        text-align: center;
    }

    span a {
        color: var(--color-slate-gray);
    }

    span a:hover {
        color: var(--color-primary);
    }

    @media (max-width: 768px) {
        margin-top: 15rem;
    }
`;
