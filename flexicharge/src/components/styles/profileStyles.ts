import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      height: "520px",
      width: "630px",
      margin: "100px auto",
      backgroundColor: theme.flexiCharge.primary.white,
      boxShadow: "3px 3px 12px #76c365",
      borderRadius: "10px",
    },

    container: {
      display: "grid",
      gridTemplateRows: "75px 75px",
      rowGap: "20px",
    },

    profile__items: {
      display: "flex",
      fontSize: "20px",
      padding: "20px",
      justifyContent: "space-between",
      alignItem: "center",
      borderTop: "1px solid #999999",
      borderRadius: "10px",
    },

    profileInfo: {
      color: "#222",
      paddingLeft: "30px",
      paddingTop: "10px",
    },

    profileDescription: {
      color: "#222",
      paddingRight: "40px",
      paddingTop: "10px",
    },

    buttonContainer: {
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
      gap: "30px",
      marginTop: "48px",
    },

    deleteButton: {
      backgroundColor: "#ff4242",
      color: "#fff",
      width: "150px",
      padding: "12px",
      fontSize: "12px",
      borderRadius: "10px",
      border: "none",
      "&:hover": {
        backgroundColor: "#b32e2e",
      },
    },

    changeButton: {
      backgroundColor: "#f0c200",
      color: "#fff",
      width: "150px",
      padding: "12px",
      fontSize: "12px",
      borderRadius: "10px",
      border: "none",
      "&:hover": {
        backgroundColor: "#a88800",
      },
    },

    cancelButton: {
      backgroundColor: "#fff",
      color: "#333",
      width: "150px",
      padding: "12px",
      fontSize: "12px",
      borderRadius: "10px",
      border: "none",
      "&:hover": {
        backgroundColor: "#999",
        color: "#fff",
      },
    },

    showPromptView: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      backgroundColor: "#999",
      width: "450px",
      height: "350px",
      border: "2px solid #000",
      zindex: "10",
      margin: "80px",
    },

    hidden: {
      display: "none",
    },

    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "70%",
      backgroundColor: "#fff",
      padding: "48px",
      borderRadius: "5px",
      boxShadow: "0 24px 40px rgba(0, 0, 0, 0.3)",
      zindex: "10",
    },

    overlay: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(3px)",
      zindex: "5",
    },
  })
);

export default useStyles;
