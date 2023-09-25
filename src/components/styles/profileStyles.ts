import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      height: "88vh",
      overflow: "auto",
      maxWidth: "96%",
      margin: "100px auto",
      marginTop: "10vh",
      backgroundColor: theme.flexiCharge.primary.white,
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
      gap: "100px",
    },

    deleteButton: {
      backgroundColor: "#ef6048",
      color: "#333",
      width: "250px",
      padding: "10px",
      fontSize: "12px",
      borderRadius: "10px",
      border: "none",
      "&:hover": {
        boxShadow: "0px 2px 2px #000",
      },
    },

    changePasswordButton: {
      backgroundColor: "#78bd76",
      color: "#333",
      width: "250px",
      padding: "10px",
      fontSize: "12px",
      borderRadius: "10px",
      border: "none",
      "&:hover": {
        boxShadow: "0px 2px 2px #000",
      },
    },
    nav: {
      width: "100vw",
      backgroundColor: theme.flexiCharge.primary.grey,
      height: "8vh",
      marginTop: 0,
      position: "fixed",
    },
    navLogo: {
      width: "15%",
      marginTop: "1vh",
      marginLeft: "5vw",
      float: "left",
    },

    editInformationButton: {
      backgroundColor: theme.flexiCharge.accent.warning,
      color: "#333",
      width: "250px",
      padding: "10px",
      fontSize: "12px",
      borderRadius: "10px",
      border: "none",
      "&:hover": {
        boxShadow: "0px 2px 2px #000",
      },
    },

    logoutButton: {
      float: "right",
      marginTop: "1.5vh",
      marginRight: "5vw",
      fontFamily: theme.flexiCharge.font.h5.fontFamily,
      fontSize: theme.flexiCharge.font.h5.fontSize,
      color: theme.flexiCharge.primary.white,
      textDecoration: "none",
      "&:hover": {
        transform: "translateY(2px)",
        color: theme.flexiCharge.primary.white,
      },
    },
  })
);

export default useStyles;
