import styled from 'styled-components';

export const ItemList = styled.li`
    counter-increment: item;
    
    span {
        color: var(--color-gray);
        font-size: 1.3rem;
    }

    span:hover {
        color: var(--color-primary);
        cursor: pointer;
    }

    span::before {
        content: "0" counter(item) ".";
        margin-right: 5px;
        color: var(--color-primary);
        font-size: var(--fz-xxs);
        text-align: right;
    }
`;
