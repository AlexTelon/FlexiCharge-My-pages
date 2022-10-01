import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body:{
      backgroundColor:theme.flexiCharge.primary.grey,
      width: "100%",
      height: "100%",
    },
    indexLogo:{
      minWidth:"30%",
      maxWidth: "30%",
      height: "auto",
      border: "2px solid #78bd76",
    },
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
    links: {
      marginTop: theme.spacing(2),
      fontWeight: 500,
      color: theme.flexiCharge.primary.blue,
      textDecorationLine: 'none',
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
