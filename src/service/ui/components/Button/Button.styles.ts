import styled from 'styled-components';

import { ITheme } from 'domain/styles/themes';

interface Props {
  theme: ITheme;
}

const StyledButton = styled('button')<Props>`
  background-color: transparent;
  color: ${props => props.theme.main};
  font-family: 'Roboto Mono', monospace;
  padding: 1rem 1.5rem;
  margin: 0.5rem;
  border-radius: 5px;
  box-shadow: 30 40 50;
  border: 2px solid;
  box-shadow: -5px 5px 10px #8f8f8f, 5px -5px 10px #ffffff;

  background: linear-gradient(225deg, #cacaca, #f0f0f0);
  font-weight: 500;
  border: none;
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
`;

const StyledButtonSuccess = styled(StyledButton)`
  color: ${props => props.theme.success};
`;

const StyledButtonError = styled(StyledButton)`
  color: ${props => props.theme.error};
`;

export const ButtonStyles = { StyledButton, StyledButtonSuccess, StyledButtonError };
