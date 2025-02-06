import { createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#673ab7', // Roxo moderno como cor primária
    },
    secondary: {
      main: '#ff9800', // Laranja vibrante como cor secundária
    },
    background: {
      default: '#f5f5f5', // Cinza claro como fundo
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Fonte moderna e legível
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9575cd', // Roxo mais claro para o modo escuro
    },
    secondary: {
      main: '#ffb74d', // Laranja mais suave para o modo escuro
    },
    background: {
      default: '#121212', // Fundo escuro
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Fonte moderna e legível
  },
});

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;