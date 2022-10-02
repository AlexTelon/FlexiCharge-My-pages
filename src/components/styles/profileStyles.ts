import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      height: "88vh",
      width: "90%",
      margin: "100px auto",
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

    changePasswordButton: {
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
  })
);

export default useStyles;
