import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Block } from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body:{
      backgroundColor:theme.flexiCharge.primary.grey,
      width: "100vw",
      height: "100vh",
      '& h1': {
        fontFamily:theme.flexiCharge.font.fontFamily._main,
        fontSize:theme.flexiCharge.font.fontSize.title,
        fontWeight: 800,
      },
    },
    indexLogo:{
      minWidth:"40vw",
      maxWidth: "40vw",
      height: "auto",
      marginTop:"3vw",
      margin: "auto",
    },
    grid:{
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "35vw",
      minWidth: "35vw",
      minHeight: "60vh",
      marginTop: "3vw",
      margin: "auto",
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
      fontFamily:theme.flexiCharge.font.fontFamily._main,
      fontSize:theme.flexiCharge.font.fontSize.bigButton,
      textTransform: "none",
    },
    links: {
      marginTop: theme.spacing(2),
      fontWeight: 1000,
      color: theme.flexiCharge.primary.green,
      textDecorationLine: 'none',
      fontFamily:theme.flexiCharge.font.fontFamily._main,
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
