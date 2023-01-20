export interface ITheme {
  background: string;
  black: string;
  error: string;
  fontFamily: string;
  glassBackgroundColor: string;
  glassBackgroundColorDark: string;
  glassBorderColor: string;
  grey: string;
  main: string;
  secondary: string;
  success: string;
}

const defaultTheme: ITheme = {
  background: '#e0e0e0',
  black: '020202',
  error: '#FF262A',
  fontFamily: 'Roboto Mono, monospace',
  glassBackgroundColor: 'rgba(255, 255, 255, 0.1)',
  glassBackgroundColorDark: 'rgba(0, 0, 0, 0.2)',
  glassBorderColor: 'rgba(255, 255, 255, 0.15)',
  grey: '#6A676C',
  main: '#ff9900',
  secondary: '#63B2FF',
  success: '#50D774'
};

export const themes = { defaultTheme };
