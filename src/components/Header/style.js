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

    #text-typing {
        color: var(--color-primary);
        font-size: 1.5rem;
        font-weight: 400;
        margin: 0;
    }

    .container-text-typing {
      display: flex;
    }

    #menu-desktop {
      display: flex;
      padding: 0 5rem 0 5rem;
    }

    #menu-mobile {
      display: none;
    }

    @media (max-width: 728px) {
    #menu-desktop {
      display: none;
    }

    #menu-mobile {
      display: flex;
    }

    #text-typing {
        font-size: 1.2rem;
    }

    height: auto;
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

  @media (max-width: 728px) {
    height: 1.4rem;
  }
`;
