import styled from 'styled-components';

const StyledTimer = styled('div')`
  display: flex;
  gap: 1rem;
  background: #e0e0e0;
  box-shadow: inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff;
  border-radius: 50px;
  padding: 0rem 4rem;
`;

const StyledCountNumbers = styled('p')`
  font-size: 2rem;
  font-weight: 300;
`;

export const Styles = { StyledCountNumbers, StyledTimer };
