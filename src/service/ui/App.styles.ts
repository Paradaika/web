import styled, { createGlobalStyle } from 'styled-components';

import { ITheme } from 'domain/styles/themes';

interface Props {
  theme: ITheme;
}

const GlobalStyles = createGlobalStyle<Props>`
html {
  background-color: ${props => props.theme.background};
  color:  ${props => props.theme.main};
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 200;
}

h1 {
  font-weight: 300;
}
`;
const StyledApp = styled('div')``;

export const Styles = { StyledApp, GlobalStyles };
