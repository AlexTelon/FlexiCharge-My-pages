import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .long": {
        fontSize: "12px",
      },
      "& .short": {
        fontSize: "15px",
      },
    },
    grid: {
      spacing: 0,
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "60%",
      minWidth: "10vh",
      height: "50rem",
      margin: "auto",
    },
    container: {
      backgroundColor: theme.flexiCharge.primary.white,
      borderRadius: "0.5rem",
      justifyContent: "center",
      padding: "1rem",
    },
  })
);

export default useStyles;
