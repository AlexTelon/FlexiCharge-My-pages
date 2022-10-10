import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import { ReactComponent as Title } from '../../assets/title.svg';
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";
import AuthService from "./AuthService";
import useStyles from "../components/styles/navbarStyles";

// import MenuIcon from '@material-ui/icons/Menu';

const categories = [
  {
    id: "",
    children: [
      {
        id: "Profile",
        icon: <AccountBoxIcon />,
        location: "/profile",
        active: false,
      },
      {
        id: "Charging History",
        icon: <HistoryIcon />,
        location: "/charging-sessions",
      },
      { id: "Invoices", 
        icon: <ReceiptIcon />, 
        location: "/invoices" },
    ],
  },
];

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToogle = () => {
    setMobileOpen(!mobileOpen);
  };

  const history = useHistory();

  return (
     <Drawer
      variant="permanent"
      open={mobileOpen}
      onClose={handleDrawerToogle}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      {categories.map(({ id, children }) => (
        <React.Fragment key={id}>
          <ListItem className={classes.categoryHeader}>
            <ListItemText
              classes={{
                primary: classes.itemText,
              }}
            >
              {id}
            </ListItemText>
          </ListItem>
          {children.map(({ id: childId, icon, location: pathLocation }) => (
            <ListItem
              key={childId}
              button
              color="primary"
              className={clsx(classes.item)}
              onClick={() => {
                history.push(pathLocation);
              }}
              title={childId}
            >
              <ListItemIcon color="primary" className={classes.itemIcon}>
                {icon}
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.itemText }}>
                {childId}
              </ListItemText>
            </ListItem>
          ))}
        </React.Fragment>
      ))}

      <Divider />

      <List className={classes.navBotSection}>
        <ListItem
          className={classes.hoverButton}
          button
          onClick={() => {
            AuthService.logout();
            history.push("/sign-in");
          }}
          title = "Sign out"
        >
          <LogoutIcon></LogoutIcon>
          <ListItemText classes={{ primary: classes.logoutText }}>
            Sign out
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => {
            !open ? handleDrawerOpen() : handleDrawerClose();
          }}
          className={classes.openDrawButton}
        >
          {!open ? <ChevronRightIcon color="inherit" /> : <ChevronLeftIcon />}
        </ListItem>
      </List>
    </Drawer>
  );
}
