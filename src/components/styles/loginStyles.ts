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
      paddingTop: "36px",
      paddingBottom: "24px",
      boxShadow: "3px 3px 12px #000",
    },
    gridItem: {
      margin: "auto",
    },
    textFields: {
      maxWidth: "80%",
      marginTop: "24px",
    },
    button: {
      "&:hover": {
        transform: "translateY(2px)",
        boxShadow: theme.flexiCharge.boxShadow.button,
        backgroundColor: theme.palette.primary.dark,
        color: theme.flexiCharge.primary.white,
      },
      marginTop: "48px",
      marginBottom: "32px",
      width: "50%",
      minHeight: "3rem",
      backgroundColor: theme.flexiCharge.accent.primary,
    },
    links: {
      marginTop: theme.spacing(2),
      fontWeight: 500,
    },
    backdrop: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      p: 4,
    },
  })
);

export default useStyles;
