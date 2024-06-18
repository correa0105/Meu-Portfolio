import styled from 'styled-components';

export const SectionHeadingContainer = styled.h2`
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 2.8rem;
    color: var(--color-gray);
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

    &::after {
        content: '';
        align-self: center;
        margin-left: 2.5rem;
        width: 300px;
        height: 1px;
        background-color: #502714;
    }
`;
