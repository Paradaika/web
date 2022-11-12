import styled from 'styled-components';

const StyledCount = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes progress {
  }

  .progress-bar {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: radial-gradient(closest-side, #2b272f 97%, transparent 0 99.9%, #32312b 0), conic-gradient(#50d774 30%, #2b272f 0);
  }
`;

export const Styles = { StyledCount };
