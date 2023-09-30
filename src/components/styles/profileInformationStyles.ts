import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "32px auto",
      display: "grid",
      width: "80%",
      gridTemplateColumns: "10fr 1fr 10fr",
    },

    profileElements: {
      fontSize: "16px",
      color: theme.flexiCharge.primary.darkGrey,
      justifySelf: "end",
    },

    description: {
      fontSize: "16px",
      color: theme.flexiCharge.primary.darkGrey,
      justifySelf: "start",

    },

    editBox: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, 0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(10px)",
    },

    editContainer: {
      backgroundColor: theme.flexiCharge.primary.white,
      border: "1px solid #333",
      padding: "42px 100px",
      alignItems:"center",
    },

    changebutton: {
      "&:hover": {
        boxShadow: "0px 2px 2px #000",
        backgroundColor: theme.palette.primary.main,
        color: theme.flexiCharge.primary.white,
      },
      backgroundColor: theme.flexiCharge.primary.green,
      marginRight: "28px",
      padding: "12px 24px ",
    },
    cancelbutton: {
      "&:hover": {
        boxShadow: "0px 2px 2px #000",
        color: theme.flexiCharge.primary.white,
      },
      padding: "12px 24px ",
    },
  })
);

export default useStyles;
