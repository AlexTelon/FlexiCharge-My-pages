// src/components/Navbar.tsx

import React, { FC, ReactElement } from "react";
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";
import AuthService from "./AuthService";
import useStyles from "../components/styles/newNavbar";

const categories = [
    {
        id: "Profile",
        location: "/profile",
        active: false,
    },
    {
        id: "Charging History",
        location: "/charging-sessions",
    },
    { id: "Invoices", 
        location: "/invoices" },
];
  
const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const classes = useStyles();

  return (
    <Box className={classes.boxSX}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="start"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
                <MenuIcon fontSize="large" className={classes.iconButton}  />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {categories.map((page) => (
                <Link
                  key={page.id}
                  component={NavLink}
                  to={page.location}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography className={classes.menuItem} >{page.id}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        {categories.map((page) => (
        <Link className={classes.boxWeb}
            key={page.id}
            component={NavLink}
            to={page.location}
        >
            {page.id}
        </Link>
        ))}
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;