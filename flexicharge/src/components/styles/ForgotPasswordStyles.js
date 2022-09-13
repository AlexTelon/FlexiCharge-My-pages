import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    grid: {
      justifyContent: "center",
      maxWidth: "40%",
      minWidth: "40vh",
      minHeight: "100vh",
      margin: "auto",
      fontWeight: "bolder",
    },
    container: {
      padding: "1rem",
      backgroundColor: theme.flexiCharge.primary.white,
      borderRadius: "0.5rem",
    },
    gridItem: {
      margin: "auto",
    },
    textFields: {
      maxWidth: "80%",
    },
    button: {
      backgroundColor: theme.flexiCharge.accent.primary,
      "&:hover": {
        background: theme.flexiCharge.accent.primary,
        boxShadow: theme.flexiCharge.boxShadow.button,
        transform: "translateY(-5px)",
      },
      maxWidth: "50%",
      maxHeight: "10vh",
      marginTop: theme.spacing(2),
      fontWeight: "bold",
      fontSize: ".7rem",
      color: theme.flexiCharge.primary.white,
    },
  })
);

export default useStyles;
