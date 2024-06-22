import styled from 'styled-components';

export const Section = styled.section`
    max-width: 100rem;
    margin-top: 24rem;

    @media (max-width: 768px) {
      margin-top: 13rem;
    }
    
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
`;
