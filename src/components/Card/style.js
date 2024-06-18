import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    height: 30rem;
    padding: 2.5rem;
    background-color: var(--color-slate);
    border-radius: .5rem;
    box-shadow: 0px 18px 23px -9px rgba(0,0,0,0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    .github-icon {
        transition: color 0.3s ease;
        color: #8892b0;

    &:hover {
      color: #ff631a;
    }
    }

    .card-title {
        color: var(--color-gray);
    }

    &:hover .card-title {
        color: #ff631a;
    }

    .card-paragraphy {
        color: var(--color-slate-gray);
        font-size: 1.8rem;
        font-family: var(--font-sans);
        line-height: 1.1;
    }

    .technology {
        color: var(--color-slate-gray);
        font-size: 1.2rem;
        font-family: var(--font-mono);
        line-height: 1.1;
    }
`;
