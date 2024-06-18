import styled from 'styled-components';

export const Hover3DEffectContainer = styled.a`
    background-color: transparent;
    color: white;
    border: 1px solid var(--color-primary);
    border-radius: 5px;
    font-size: 1.3rem;
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: var(--font-mono);
    font-weight: 500;
    color: var(--color-primary);

    &:hover {
        transform: translateY(-5px) translateX(-5px);
        box-shadow: 3px 3px 0px var(--color-primary);
    }
`;
