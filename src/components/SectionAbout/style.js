import styled from 'styled-components';

export const Section = styled.section`
    max-width: 90rem;

    p {
        color: var(--color-slate-gray);
        font-family: var(--font-sans);
        font-weight: 400;
        font-size: 2rem;
    }

    .grid-skills {
        display: grid;
        grid-template-columns: repeat(2, minmax(14rem, 20rem));
        gap: .7rem 1rem;
        padding: 0;
        margin: 2rem 0 0 0;
        font-size: 1.45rem;
        font-weight: 400;
        color: var(--color-slate-gray);

        li {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }

    .img-container {
        width: 75%;
        position: relative;
        padding: 0;

        img {
            border-radius: 7px;
            width: 100%;
            transition: all 0.3s ease;
        }

        &:hover img {
                transform: translate(-3px, -3px);
            }

        &::before {
            content: '';
            position: absolute;
            border-radius: 7px;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: var(--color-dark);
            opacity: 0.3;
            transition: all 0.3s ease;
        }

        &:hover::before {
            opacity: 0;
            transform: translate(-3px, -3px);
        }

        &::after {
            content: '';
            z-index: -1;
            position: absolute;
            top: 15px;
            left: 15px;
            width: 100%;
            height: 100%;
            border-radius: 7px;
            border: 2px solid var(--color-primary);
            background-color: transparent;
            transition: all 0.3s ease;
        }

        &:hover::after {
            transform: translate(3px, 3px);
        }
    }
`;
