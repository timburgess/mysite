import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: '#00759a',
  //     contrastText: '#fff',
  //   },
  //   secondary: {
  //     main: '#7ab800',
  //     dark: '#34b233',
  //     contrastText: '#fff',
  //   },
  // },
  typography: {
    useNextVariants: true,
    fontFamily: ['Raleway', 'sans-serif'].join(','),
  }
    // htmlFontSize: 16, // html element size
  //   // print media fonts are half the size
  //   h1: {
  //     fontSize: '2.5rem',
  //     fontWeight: 300,
  //     '@media print': {
  //       fontSize: '1.25rem',
  //     },
  //   },
  //   h2: {
  //     fontSize: '2rem',
  //     fontWeight: 300,
  //     '@media print': {
  //       fontSize: '1rem',
  //     },
  //   },
  //   h3: {
  //     fontSize: '1.5rem',
  //     fontWeight: 300,
  //     '@media print': {
  //       fontSize: '0.75rem',
  //     },
  //   },
  //   h4: {
  //     fontSize: '1.125rem',
  //     fontWeight: 300,
  //     '@media print': {
  //       fontSize: '0.5625rem',
  //     },
  //   },
  //   h5: {
  //     fontSize: '0.875rem',
  //     fontWeight: 600,
  //     '@media print': {
  //       fontSize: '0.4375rem',
  //     },
  //   },
  //   h6: {
  //     fontSize: '0.8125rem',
  //     fontWeight: 600,
  //     '@media print': {
  //       fontSize: '0.4rem !important',
  //     },
  //   },
  //   subtitle1: {
  //     fontSize: '0.75rem',
  //     fontWeight: 600,
  //     '@media print': {
  //       fontSize: '0.375rem',
  //     },
  //   },
  //   body2: {
  //     fontSize: '1rem', // typography default
  //     fontWeight: 400,
  //     '@media print': {
  //       fontSize: '0.5rem',
  //     },
  //   },
  // },
  // overrides: {
  //   MuiTypography: {
  //     root: {
  //       lineHeight: '1.65 !important',
  //     },
  //   },
  //   MuiButton: {
  //     root: {
  //       textTransform: 'inherit',
  //       fontWeight: 600,
  //     },
  //   },
  //   MuiListItem: {
  //     root: {
  //       textTransform: 'capitalize',
  //     },
  //   },
  //   MuiSnackbarContent: {
  //     root: {
  //       // override for all breakpoints
  //       maxWidth: '90vw !important',
  //     },
  //   },
  //   // deal with white text causing lighter ripple
  //   MuiTouchRipple: {
  //     child: {
  //       backgroundColor: 'rgba(0, 0, 0, 0.87)',
  //     },
  //   },
  // },
})
