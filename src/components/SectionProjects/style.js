import styled from 'styled-components';

export const Section = styled.section`
    max-width: 100rem;
    margin-top: 24rem;
    
    .paragraphy-projects {
        font-size: 1.8rem;
        color: var(--color-slate-gray);
        font-weight: 400;
        font-family: var(--font-sans);

        span {
            font-family: var(--font-mono);
            font-size: 1.4rem;
        }
    }

    .view-more {
        margin-top: 1rem;
        align-self: flex-end;
        font-size: 1.4rem;
        font-weight: 400;
        font-family: var(--font-mono);
        position: relative;
        display: inline-block;
        cursor: pointer;
    }

    .view-more::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 2px;
        background-color: var(--color-slate);
        transition: width 0.3s ease;
    }

    .view-more:hover::after {
        width: 100%;
    }
    
`;
