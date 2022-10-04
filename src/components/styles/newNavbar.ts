import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    boxSX:{
        width: "96%",
        height: "10vh",
        marginTop:"5%",
        backgroundColor:theme.flexiCharge.primary.white,
        justifyContent: "center",
        margin: "auto",
        position:"fixed",
        borderRadius: "0.5rem",
        boxShadow:"0px 0px 10px 10px #ffffff",

    },
    boxWeb:{
        "&:hover": {
            border: "4px solid #ffffff",
            color: theme.flexiCharge.primary.black,
            backgroundColor: theme.flexiCharge.primary.lightGrey,
            borderBlockEndColor:theme.flexiCharge.primary.black,
        },
        "&:active": {
            border: "4px solid #ffffff",
            backgroundColor: theme.flexiCharge.primary.lightGrey,
            borderBlockEndColor:theme.flexiCharge.primary.black,
        },
        width:"100%",
        height:"100%",
        padding:"2%",
        fontFamily:theme.flexiCharge.font.h5.fontFamily,
        fontSize:theme.flexiCharge.font.h5.fontSize,

    },
    iconButton:{
        margin:"30px",
        color: theme.flexiCharge.primary.green,
    },
    menuItem:{
        color: theme.flexiCharge.primary.darkGrey,
        padding:"2%",

    }

    })

);

export default useStyles;