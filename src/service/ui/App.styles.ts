import styled, { createGlobalStyle } from 'styled-components';

import { ITheme } from 'domain/styles/themes';

interface Props {
  theme: ITheme;
}

const GlobalStyles = createGlobalStyle<Props>`
html  {
  background-color: ${props => props.theme.background};
  color:  ${props => props.theme.main};
  margin: 0px;
  padding: 0px;
  min-height: 100%;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 200;
  display: flex;
  flex-direction: column;
}
 
body{
  flex: 1;
  margin: 0;
  display: flex;
  flex-direction: column;

  #root{
    display: flex;
    flex: 1;
    flex-direction: column;
  }
}

h1 {
  font-weight: 300;
}

h2{
  font-weight: 300;
}
`;
const StyledApp = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Styles = { StyledApp, GlobalStyles };
