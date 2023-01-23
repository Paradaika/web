import styled from 'styled-components';

export const StyledHeader = styled.div`
  padding: 0rem 2rem;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: -10;

  h1 {
    font-size: 5rem;
    animation: leftApproach 800ms ease-out;
  }

  @keyframes leftApproach {
    0% {
      transform: translateX(-30rem);
    }
    90% {
      transform: translateX(2rem);
    }
  }
`;
