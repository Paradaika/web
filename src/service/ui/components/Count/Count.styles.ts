import styled from 'styled-components';

interface Props {
  counterPercentage: string;
}

const StyledCount = styled('div')<Props>`
  align-items: center;
  aspect-ratio: 1/1;
  background: radial-gradient(closest-side, #2b272f 97%, transparent 0 99.9%, #32312b 0),
    conic-gradient(#50d774 ${props => props.counterPercentage}, #2b272f 0);
  border-radius: 50%;
  display: flex;
  display: grid;
  flex-direction: column;
  padding: 2rem;
  place-items: center;
  width: fit-content;
`;

export const Styles = { StyledCount };
