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
        borderRadius: "0.5rem",
        boxShadow:"0px 0px 10px 10px #ffffff",

    },
    boxWeb:{
        "&:hover": {
            border: "4px solid #ffffff",
            color: theme.flexiCharge.primary.black,
            backgroundColor: theme.flexiCharge.primary.lightGrey,
            borderBlockEndColor:theme.flexiCharge.primary.darkGrey,
        },
        "&:active": {
            border: "4px solid #ffffff",
            backgroundColor: theme.flexiCharge.primary.lightGrey,
            borderBlockEndColor:theme.flexiCharge.primary.darkGrey,
        },
        width:"100%",
        height:"100%",
        padding:"2%",
        color: theme.flexiCharge.primary.green,
        textDecorationLine: 'none',

    },
    iconButton:{
        margin:"30px",
        color: theme.flexiCharge.primary.green,
    },
    menuItem:{
        color: theme.flexiCharge.primary.darkGrey,
        textDecorationLine: 'none',
        padding:"2%",

    }

    })

);

export default useStyles;