import styled from 'styled-components';

export const Section = styled.section`
    max-width: 65rem;
    margin-top: 20rem;

    
    h3 {
        font-family: var(--font-sans);
        font-weight: 600;
        font-size: 6.5rem;
        color: var(--color-gray);
        margin: 0;
    }

    p {
        color: var(--color-slate-gray);
        font-family: var(--font-sans);
        font-weight: 400;
        font-size: 2rem;
        text-align: center;
    }

    a {
        font-size: 1.4rem;
    }

    @media (max-width: 768px) {
        margin-top: 15rem;

        h3 {
            font-size: 3.5rem;
        }
    }
`;

export const Title = styled.h2`
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 2.8rem;
    color: var(--color-primary);
    position: relative;
    display: flex;
    align-items: baseline;

    &::before {
        content: "0" counter(section) ".";
        vertical-align: baseline;
        margin-right: 10px;
        color: var(--color-primary);
        font-size: 2rem;
        font-weight: 400;
        font-family: var(--font-mono);
        counter-increment: section 1;
    }
`;
