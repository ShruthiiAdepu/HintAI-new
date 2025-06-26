import { createTheme } from '@mui/material/styles';



export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8ab4f8',
    },
    secondary: {
      main: '#f1f3f4',
    },
    background: {
      default: '#1e1e1e',
      paper: '#2d2d2d',
    },
    text: {
      primary: '#e8eaed',
      secondary: '#9aa0a6',
    },
  },
  typography: {
    fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
  },
});