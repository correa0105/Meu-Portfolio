import styled from 'styled-components';

export const Lantern = styled.div`
  position: fixed; /* Change to fixed to handle scroll correctly */
  width: 500px;
  height: 500px;
  pointer-events: none; /* Allow clicks to pass through */
  border-radius: 50%;
  background: radial-gradient(circle, rgba(219, 108, 68, 0.1) 0%, rgba(0,0,0,0) 70%);
  mix-blend-mode: screen;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: transform 0.1s ease-out;
`;
