import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#263238',
      // main: '#7ab800',
      // dark: '#34b233',
      // contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Raleway', 'sans-serif'].join(','),
  },
})
