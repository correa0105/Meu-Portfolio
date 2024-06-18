import styled from 'styled-components';

export const ItemList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;


    a {
        color: var(--color-gray);
        font-size: 1.5rem;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a:hover {
        color: var(--color-primary);
    }

    a::before {
        content: "0" counter(item) ".";
        margin-right: 5px;
        color: var(--color-primary);
        font-size: var(--fz-xxs);
        position: relative;
        top: -20px;
    }
`;
