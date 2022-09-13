import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    grid: {
      spacing: 0,
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "40%",
      minWidth: "40vh",
      minHeight: "100vh",
      margin: "auto",
      fontWeight: "bolder",
    },
    container: {
      backgroundColor: theme.flexiCharge.primary.white,
      borderRadius: "0.5rem",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    },
    gridItemInputs: {
      marginTop: "3rem",
    },
    gridItemLabel: {
      textAlign: "right",
      marginTop: "3rem",
    },
    textField: {
      marginTop: "1rem",
      maxWidth: "80%",
    },
    button: {
      backgroundColor: theme.flexiCharge.accent.primary,
      "&:hover": {
        background: theme.flexiCharge.accent.primary,
        boxShadow: theme.flexiCharge.boxShadow.button,
        transform: "translateY(-5px)",
      },
      maxWidth: "80%",
      minHeight: "48px",
      marginTop: theme.spacing(2),
      fontWeight: "bolder",
      fontSize: "inherit",
      margin: "auto",
      color: theme.flexiCharge.primary.white,
    },
    input: {
      maxWidth: "5%",
      marginRight: ".5rem",
      minHeight: "2.5rem",
      minWidth: "2.5rem",
      textAlign: "center",
      fontWeight: "bolder",
    },
  })
);

export default useStyles;
