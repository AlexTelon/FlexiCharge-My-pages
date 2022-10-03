import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "100px auto",
      display: "grid",
      width: "33%",
      gridTemplateColumns: "1fr 3fr 1fr",
    },

    profileElements: {
      gridColumn: "1/2",
      fontSize: "24px",
      color: theme.flexiCharge.primary.darkGrey,
      alignSelf: "end",
    },

    description: {
      gridColumn: "2/3",
      fontSize: "24px",
      color: theme.flexiCharge.primary.darkGrey,
      alignSelf: "end",
    },

    editImg: {
      gridColumn: "3/4",
      color: theme.flexiCharge.primary.darkGrey,
      alignSelf: "start",
    },
  })
);

export default useStyles;
