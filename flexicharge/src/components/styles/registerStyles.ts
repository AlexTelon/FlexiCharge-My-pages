import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "40%",
      minWidth: "40vh",
      minHeight: "100vh",
      height: "0",
      margin: "auto",
    },
    container: {
      backgroundColor: theme.flexiCharge.primary.white,
      borderRadius: "0.5rem",
      justifyContent: "center",
      padding: "2rem",
      border: "solid 3px #78bd76",
    },
    gridItem: {
      margin: "auto",
    },
    registerTitle: {
      fontFamily: "Outfit, sans-serif",
    },

    textFields: {
      maxWidth: "80%",
    },
    button: {
      "&:hover": {
        boxShadow: theme.flexiCharge.boxShadow.button,
        backgroundColor: "#4d9c4b",
        color: theme.flexiCharge.primary.white,
      },
      backgroundColor: theme.flexiCharge.accent.primary,
      width: "50%",
      marginTop: "48px",
      marginBottom: "28px",
    },
    links: {
      margin: "auto",
      fontWeight: 500,
      textDecoration: "none",
    },
    checkAccount: {
      display: "flex",
    },

    haveAccount: {
      color: theme.flexiCharge.primary.black,

      "&:hover": {
        color: theme.flexiCharge.accent.primary,
      },
    },

    signIn: {
      color: theme.flexiCharge.accent.primary,
      marginLeft: "5px",
      "&:hover": {
        color: theme.flexiCharge.primary.black,
      },
    },

    forgotPassword: {
      color: theme.flexiCharge.accent.primary,
      textDecoration: "none",
      "&:hover": {
        color: theme.flexiCharge.primary.black,
      },
    },
  })
);

export default useStyles;
