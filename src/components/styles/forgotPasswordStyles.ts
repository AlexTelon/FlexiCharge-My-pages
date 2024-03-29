import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "35vw",
      minWidth: "35vw",
      minHeight: "100vh",
      marginTop: "3vw",
      margin: "auto",
    },
    nav: {
      width: "100vw",
      backgroundColor: theme.flexiCharge.primary.grey,
      height: "8vh",
      position: "fixed"
    },
    navLogo: {
      width: "15%",
      marginTop: "1vh",
      marginLeft: "5vw",
      float: "left",

    },
    container: {
      backgroundColor: theme.flexiCharge.primary.white,
      borderRadius: "0.5rem",
      justifyContent: "center",
      paddingTop: "36px",
      paddingBottom: "24px",
      border: "3px solid #78bd76",
      '& h1': {
        fontFamily: theme.flexiCharge.font.fontFamily._main,
        fontSize: theme.flexiCharge.font.fontSize.title,
        fontWeight: 800,
      },
      '& p': {
        fontFamily: theme.flexiCharge.font.fontFamily._main,

      },
    },
    gridItem: {
      margin: "auto",
    },
    textFields: {
      maxWidth: "40%",
      marginTop: "24px",
    },
    button: {
      "&:hover": {
        transform: "translateY(2px)",
        boxShadow: theme.flexiCharge.boxShadow.button,
        backgroundColor: theme.flexiCharge.primary.red,
      },
      color: theme.flexiCharge.primary.white,
      marginTop: "48px",
      marginBottom: "32px",
      width: "60%",
      minHeight: "2.5rem",
      borderRadius: "0.5rem",
      backgroundColor: theme.flexiCharge.primary.red,
      fontFamily: theme.flexiCharge.font.fontFamily._main,
      fontSize: theme.flexiCharge.font.fontSize.bigButton,
      textTransform: "none",
    },
  })
);

export default useStyles;
