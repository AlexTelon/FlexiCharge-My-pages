import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      height: "450px",
      width: "550px",
      margin: "140px auto",
      backgroundColor: "rgb(174,223,164)",
      boxShadow: "1px 1px 10px #76c365",
      borderRadius: "10px",
    },

    container: {
      display: "grid",
      gridTemplateRows: "75px 75px",
      rowGap: "20px",
    },

    profile__items: {
      display: "flex",
      fontSize: "16px",
      padding: "20px",
      justifyContent: "space-between",
      alignItem: "center",
      borderTop: "1px solid #76c365",
      borderRadius: "10px",
    },

    profileInfo: {
      color: "#fff",
    },
    profileDescription: {
      color: "#fff",
    },

    buttonContainer: {
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
      gap: "30px",
      marginTop: "18px",
    },

    deleteButton: {
      backgroundColor: "#ff4242",
      color: "#fff",
      width: "150px",
      padding: "18px",
      fontSize: "12px",
      borderRadius: "10px",
      border: "none",
    },

    changePasswordButton: {
      backgroundColor: "#f0c200",
      color: "#fff",
      width: "150px",
      padding: "18px",
      fontSize: "12px",
      borderRadius: "10px",
      border: "none",
    },
  })
);

export default useStyles;
