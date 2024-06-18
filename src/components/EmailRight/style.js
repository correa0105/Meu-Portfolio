import styled from 'styled-components';

export const SocialListContainer = styled.ul`
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
`;
