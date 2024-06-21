import styled from 'styled-components';

export const SocialListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    padding: 0;
    margin: 0;

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
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
