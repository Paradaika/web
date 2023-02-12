import Body from './layout/Body';
import Header from './layout/Header';

//import './App.css';
import { Styles } from './App.styles';
import { themes } from 'domain/styles/themes';
import { SettingsContextProvider } from './components/SettingsContext/SettingsContext';

export const App = () => {
  return (
    <Styles.StyledApp>
      <Styles.GlobalStyles theme={themes.defaultTheme} />
      <SettingsContextProvider>
        <Header />
        <Body />
      </SettingsContextProvider>
    </Styles.StyledApp>
  );
};
