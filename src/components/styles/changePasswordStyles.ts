import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '35vw',
      minWidth: '35vw',
      minHeight: '60vh',
      marginTop: '10vh',
      margin: 'auto'
    },
    nav: {
      width: '100vw',
      backgroundColor: theme.flexiCharge.primary.grey,
      height: '8vh',
      marginTop: 0,
      position: 'fixed'
    },
    navLogo: {
      width: '15%',
      marginTop: '1vh',
      marginLeft: '5vw',
      float: 'left'

    },
    container: {
      '& h1': {
        fontFamily: theme.flexiCharge.font.fontFamily._main,
        fontSize: theme.flexiCharge.font.fontSize.title,
        fontWeight: 800
      },
      backgroundColor: theme.flexiCharge.primary.white,
      borderRadius: '0.5rem',
      justifyContent: 'center',
      paddingTop: '36px',
      paddingBottom: '24px',
      border: '3px solid #78bd76',
      marginTop: '15%'
    },
    gridItem: {
      margin: 'auto'
    },
    textFields: {
      maxWidth: '40%',
      marginTop: '24px'
    },
    button: {
      '&:hover': {
        transform: 'translateY(2px)',
        boxShadow: theme.flexiCharge.boxShadow.button,
        backgroundColor: theme.flexiCharge.primary.yellow
      },
      color: theme.flexiCharge.primary.white,
      marginTop: '48px',
      marginBottom: '32px',
      width: '60%',
      minHeight: '2.5rem',
      borderRadius: '0.5rem',
      backgroundColor: theme.flexiCharge.primary.yellow,
      fontFamily: theme.flexiCharge.font.fontFamily._main,
      fontSize: theme.flexiCharge.font.fontSize.bigButton,
      textTransform: 'none'
    },
    input: {
      maxWidth: '5%',
      marginTop: '3rem',
      marginRight: '.5rem',
      minHeight: '2rem',
      minWidth: '2rem'
    },
    logoutButton: {
      float: 'right',
      marginTop: '1.5vh',
      marginRight: '5vw',
      fontFamily: theme.flexiCharge.font.fontFamily._main,
      fontSize: theme.flexiCharge.font.fontSize.bigButton,
      color: theme.flexiCharge.primary.white,
      textDecoration: 'none',
      '&:hover': {
        transform: 'translateY(2px)',
        color: theme.flexiCharge.primary.white
      }

    }
  })
);

export default useStyles;