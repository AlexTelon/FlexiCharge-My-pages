import { Link, useHistory } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@material-ui/core";
import AuthService from "./AuthService";

const BottomNavigationBar = () => {
  const history = useHistory();

  return (
    <Paper
      style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          component={Link}
          to="/profile"
          label="Profile"
          icon={<AccountBoxIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/charging-sessions"
          label="Transactions"
          icon={<ReceiptIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            AuthService.logout();
            history.push("/sign-in");
          }}
          label="Logout"
          icon={<LogoutIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationBar;
