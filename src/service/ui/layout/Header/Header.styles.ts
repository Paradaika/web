import styled from 'styled-components';

export const StyledHeader = styled.div`
  padding: 0rem 2rem;

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
