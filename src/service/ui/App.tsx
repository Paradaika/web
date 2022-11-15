import Body from './layout/Body';
import Header from './layout/Header';

//import './App.css';
import { Styles } from './App.styles';
import { themes } from 'domain/styles/themes';

export const App = () => {
  return (
    <Styles.StyledApp>
      <Styles.GlobalStyles theme={themes.defaultTheme} />
      <Header />
      <Body />
    </Styles.StyledApp>
  );
};
