import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background: ${({ isTop }) => (isTop ? 'transparent' : 'var(--color-dark)')};
    box-shadow: ${({ isTop }) => (isTop ? 'none' : '0 8px 10px rgba(0,0,0,0.2)')};
    height: ${({ isTop }) => (isTop ? '100px' : '70px')};
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: all 0.3s;
    font-family: var(--font-mono);
    padding: 0 5rem 0 5rem;

    #text-typing {
        color: var(--color-primary);
        font-size: 1.5rem;
        font-weight: 400;
    }

    .container-text-typing {
      display: flex;
    }

    .nav-menu {
        display: flex;
    }

    @media (max-width: 728px) {
    .container-text-typing {
        display: none;
    }

    .nav-menu {
        display: none;
    }
    }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: .2rem;
  height: 1.8rem;
  background-color: var(--color-primary);
  margin-left: .5rem;
  animation: blink 1s step-start infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
