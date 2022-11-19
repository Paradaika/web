export interface ITheme {
  background: string;
  main: string;
  secondary: string;
  success: string;
  error: string;
  grey: string;
  fontFamily: string;
  glassBackgroundColor: string;
  glassBackgroundColorDark: string;
  glassBorderColor: string;
}

const defaultTheme: ITheme = {
  background: '#2b272f',
  main: '#ff9900',
  secondary: '#63B2FF',
  success: '#50D774',
  error: '#FF262A',
  grey: '#6A676C',
  fontFamily: 'Roboto Mono, monospace',
  glassBackgroundColor: 'rgba(255, 255, 255, 0.1)',
  glassBackgroundColorDark: 'rgba(0, 0, 0, 0.2)',
  glassBorderColor: 'rgba(255, 255, 255, 0.15)'
};

export const themes = { defaultTheme };
