import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableSortLabel:{
        backgroundColor: "black",
        color: "white !important",
        fill: "white !important",
    },
    maxHeight:{
        maxHeight: "100%",
        overflow: "auto",
    }
    
  }))


export default useStyles;