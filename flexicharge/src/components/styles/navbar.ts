import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

//const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hide: {
      display: "none",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: "240px",
        flexShrink: 0,
        whiteSpace: "nowrap",
        color: theme.flexiCharge.primary.white,
      },
    },
    drawerOpen: {
      width: "240px",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    content: {
      flexGrow: 1,
    },
    openDrawButton: {
      float: "right",
      display: "flex",
      justifyContent: "flex-end",
    },
    navBotSection: {
      bottom: 0,
      marginTop: "auto",
      paddingLeft: theme.spacing(1),
    },
    categoryHeader: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      display: "flex",
    },
    listPosition: {
      paddingLeft: theme.spacing(1),
    },
    headerPosition: {
      width: "100px",
    },
    item: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingBottom: theme.spacing(2),
      color: "rgba(255, 255, 255, 0.7)",
      "&:hover,&:focus": {
        backgroundColor: theme.flexiCharge.primary.lightGrey,
      },
    },
    itemIcon: {
      minWidth: "auto",
      marginRight: theme.spacing(1),
      color: theme.flexiCharge.primary.darkGrey,
      paddingTop: theme.spacing(0),
    },
    itemText: {
      fontSize: "inherit",
      paddingLeft: theme.spacing(2),
      color: theme.flexiCharge.primary.darkGrey,
    },
    logoutText: {
      fontSize: "inherit",
      paddingLeft: theme.spacing(3),
      color: theme.flexiCharge.primary.darkGrey,
    },
    MenuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

export default useStyles;
