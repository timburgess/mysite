import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#263238',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Raleway', 'sans-serif'].join(','),
  },
})
