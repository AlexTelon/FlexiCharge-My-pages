import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
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
      display: "flex",
      flexDirection: "column",
    },

    profile__items: {
      backgroundColor: "blue",
      width: "200px",
      height: "75px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    profileInfo: {
      marginRight: "30px",
    },
  })
);

export default useStyles;
