import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
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
      padding: "1rem",
    },
    gridItem: {
      margin: "auto",
    },
    textFields: {
      maxWidth: "80%",
    },
    button: {
      "&:hover": {
        boxShadow: theme.flexiCharge.boxShadow.button,
        transform: "translateY(-5px)",
      },
      width: "50%",
      minHeight: "3rem",
      marginTop: theme.spacing(2),
    },
    links: {
      margin: "auto",
      fontWeight: 500,
    },
  })
);

export default useStyles;
