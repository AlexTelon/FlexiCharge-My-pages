import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid:{
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "35vw",
      minWidth: "35vw",
      minHeight: "100vh",
      marginTop: "3vw",
      margin: "auto",
    },
    nav:{
      width: "100%",
      backgroundColor: theme.flexiCharge.primary.grey,
      height: "8vh",
      position:"fixed"
    },
    navLogo:{
      width:"15%",
      marginTop:"1vh",
      marginLeft:"5vw",
      float:"left",

    },
    container: {
      backgroundColor: theme.flexiCharge.primary.white,
      borderRadius: "0.5rem",
      justifyContent: "center",
      paddingTop: "36px",
      paddingBottom: "24px",
      border: "3px solid #78bd76",
      '& h1': {
        fontFamily:theme.flexiCharge.font.fontFamily,
        fontSize:theme.flexiCharge.font.fontSize.title,
        fontWeight: 800,
      },
      '& p': {
        fontFamily:theme.flexiCharge.font.fontFamily,

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
        backgroundColor: theme.palette.primary.main,
        color: theme.flexiCharge.primary.white,
      },
      marginTop: "48px",
      marginBottom: "32px",
      width: "60%",
      minHeight: "2.5rem",
      borderRadius: "0.5rem",
      backgroundColor: theme.flexiCharge.primary.green,
      fontFamily:theme.flexiCharge.font.fontFamily,
      fontSize:theme.flexiCharge.font.fontSize.bigButton,
      textTransform: "none",
    },
    input: {
      maxWidth: "5%",
      marginTop: "3rem",
      marginRight: ".5rem",
      minHeight: "2rem",
      minWidth: "2rem",
    },
  })
);

export default useStyles;
