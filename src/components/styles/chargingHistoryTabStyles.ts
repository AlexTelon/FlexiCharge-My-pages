import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableContainer: {
        maxHeight: "100%",
        overflow: "auto",
    },
  }))


export default useStyles;