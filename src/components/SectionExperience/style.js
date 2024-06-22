import styled from 'styled-components';

export const Section = styled.section`
    max-width: 70rem;
    margin-top: 24rem;

    @media (max-width: 768px) {
      margin-top: 13rem;
    }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
      flex-direction: column;
      gap: 4rem;
    }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.5rem;
`;

export const Menu = styled.div`
  position: relative;
`;

export const MenuItem = styled.div`
  background-color: ${({ selected }) => (selected ? 'var(--color-slate)' : 'transparent')};
  color: ${({ selected }) => (selected ? 'var(--color-primary)' : 'var(--color-slate-gray)')};
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: var(--font-mono);
  transition: background-color 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: var(--color-slate);
  }
`;

export const Content = styled.div`
  background-color: transparent;
  max-width: 100%;
`;

export const ScrollbarTrack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--color-slate);
  border-radius: 5px;
  overflow: hidden;
`;

export const Scrollbar = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: var(--color-primary);
  transition: top 0.3s ease;
`;
