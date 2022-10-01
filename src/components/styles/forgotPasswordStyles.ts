import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "35%",
      minWidth: "40vh",
      minHeight: "100vh",
      height: "0",
      marginTop: "0",
      margin: "auto",
    },
    container: {
      backgroundColor: theme.flexiCharge.primary.white,
      borderRadius: "0.5rem",
      justifyContent: "center",
      paddingTop: "36px",
      paddingBottom: "24px",
      boxShadow: "3px 3px 12px #000",
      border: "2px solid #78bd76",
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
        backgroundColor: theme.palette.primary.main,
        color: theme.flexiCharge.primary.white,
      },
      marginTop: "48px",
      marginBottom: "32px",
      width: "60%",
      minHeight: "2.5rem",
      borderRadius: "0.5rem",
      backgroundColor: theme.flexiCharge.primary.green,
    },
  })
);

export default useStyles;
