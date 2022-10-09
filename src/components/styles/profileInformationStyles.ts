import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { height } from "@mui/system";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "50px auto",
      display: "grid",
      width: "33%",
      gridTemplateColumns: "1fr 3fr 1fr",
    },

    profileElements: {
      gridColumn: "1/2",
      fontSize: "24px",
      color: theme.flexiCharge.primary.darkGrey,
      alignSelf: "end",
      justifySelf: "start",
    },

    description: {
      gridColumn: "2/3",
      fontSize: "24px",
      color: theme.flexiCharge.primary.darkGrey,
      alignSelf: "end",
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
    },
  })
);

export default useStyles;
