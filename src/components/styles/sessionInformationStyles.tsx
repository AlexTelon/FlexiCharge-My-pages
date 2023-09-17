import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid:{
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "35vw",
      minWidth: "35vw",
      minHeight: "100vh",
      marginTop: "3vw",
      margin: "auto",
    },
    /* The Modal (background) */
    modal: {
        display: "none", /* Hidden by default */
        position: "fixed", /* Stay in place */
        zIndex: 1, /* Sit on top */
        paddingTop: "100px", /* Location of the box */
        left: "0",
        top: "0",
        width: "100%", /* Full width */
        height: "100%", /* Full height */
        overflow: "auto", /* Enable scroll if needed */
        //backgroundColor: "rgb(0,0,0)", /* Fallback color */
        backgroundColor: "rgba(0,0,0,0.4)" /* Black w/ opacity */
    },  
     /* Modal Content */
     modalContent: {
        backgroundColor: "#fefefe",
        margin: "auto",
        padding: "20px",
        border: "1px solid #888",
        width: "80%",
    },
    /* The Close Button */
    close: {
        color: "#aaaaaa",
        float: "right",
        fontSize: "28px",
        fontWeight: "bold",

        "&:hover, &:focus": { 
            color: "#000",
            textDecoration: "none",
            cursor: "pointer"
        }
    },
  })
);

export default useStyles;




