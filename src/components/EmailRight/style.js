import styled from 'styled-components';

export const SocialListContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
    gap: 2.5rem;


    &::after {
        content: '';
        position: relative;
        bottom: 0px;
        width: 1px;
        height: 120px;
        background-color: var(--color-gray);
    }

    a {
        color: var(--color-gray);
        writing-mode: vertical-rl;
        font-family: var(--font-mono);
        font-size: 1.4rem;
        font-weight: 300;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
