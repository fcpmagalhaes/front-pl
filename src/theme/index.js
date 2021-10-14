import { createTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#074EE8',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: colors.common.white,
      dark: '#f4f6f8',
      paper: colors.common.white,
    },
  },
});

export default theme;