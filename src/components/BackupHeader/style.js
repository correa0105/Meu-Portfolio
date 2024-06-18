import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 70px;
    background: ${({ isTop }) => (isTop ? 'transparent' : 'var(--color-dark)')};
    box-shadow: ${({ isTop }) => (isTop ? 'none' : '0 8px 10px rgba(0,0,0,0.2)')};
    height: ${({ isTop }) => (isTop ? '100px' : '70px')};
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: all 0.3s;
    font-family: var(--font-mono);

    #logo {
        color: var(--color-primary);
        font-size: 1.5rem;
        font-weight: 400;
    }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.8em;
  background-color: var(--color-primary);
  margin-left: 5px;
  animation: blink 1s step-start infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export const NavMenu = styled.nav`
    display: ${(props) => (props.isMobile ? 'none' : 'flex')};

    ol {
      counter-reset: item;
    }
`;

export const MobileMenuButton = styled.button`
    background: none;
    border: none;
    color: var(--color-primary);
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1100;
    display: ${(props) => (props.isMobile ? 'block' : 'none')};
`;

export const MobileMenuList = styled.ol`
    padding: 0;
    background: var(--color-slate);
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7rem;
`;
