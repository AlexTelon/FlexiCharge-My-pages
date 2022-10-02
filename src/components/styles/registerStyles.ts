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
    nav:{
      width: "100%",
      backgroundColor: theme.flexiCharge.primary.grey,
      height: "8vh",
    },
    container: {
      backgroundColor: theme.flexiCharge.primary.white,
      borderRadius: "0.5rem",
      justifyContent: "center",
      paddingTop: "36px",
      paddingBottom: "24px",
      border: "3px solid #78bd76",
    },
    gridItem: {
      margin: "auto",
    },
    textFields: {
      maxWidth: "40%",
      marginTop: "24px",
      marginLeft:"10%",
      marginRight:"10%",
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
    links: {
      marginTop: theme.spacing(2),
      fontWeight: 500,
      color: theme.flexiCharge.primary.green,
      textDecorationLine: 'none',
    },
  })
);

export default useStyles;
