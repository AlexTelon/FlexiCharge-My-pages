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
  })
);

export default useStyles;
