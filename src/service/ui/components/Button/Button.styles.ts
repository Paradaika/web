import styled from 'styled-components';

const StyledButton = styled('button')`
  background-color: transparent;
  color: #ff9900;
  font-family: 'Roboto Mono', monospace;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 5px;
  box-shadow: 30 40 50;
  border: 1px solid;

  :disabled {
    color: #6a676c;
  }

  :active {
    transform: scale(0.95);
    transition: transform 0.2 linear;
  }
  :hover {
    cursor: pointer;
    /* transform: scale(1.05);
    transition: transform 0.3s linear; */
  }
  .red {
    color: #ff262a;
  }
`;

export const Styles = { StyledButton };
