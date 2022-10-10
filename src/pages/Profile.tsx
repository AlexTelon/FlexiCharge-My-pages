import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../components/AuthService";
import useStyles from "../components/styles/profileStyles";
import Tabs from "../components/Tabs";
import ProfileFromHandling from "../components/ProfileFormHandling";
import { Redirect, Link } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import { Grid } from "@material-ui/core";
import NewNavbar from "../components/NewNavbar";
import Mobile from "../components/Mobile";
import BottomNavigationBar from "../components/BottomNavigation";
import FlexiChargeLogoDarkGrey from "../assets/FlexiChargeLogoDarkGrey.svg";

const Profile = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilytName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const history = useHistory();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      history.push("/sign-in");
    } else {
      setFirstName(currentUser.name);
      setFamilytName(currentUser.family_name);
      setEmail(currentUser.email);
      setPhoneNumber(currentUser.phone);
      setAddress(currentUser.address);
      setUserName(currentUser.username);
    }
  }, []);

  return (
    <Grid container direction="column">
      <div className={classes.nav}>
        <Link to="/profile">
          <img className={classes.navLogo} src={FlexiChargeLogoDarkGrey} />
        </Link>

        <Link to="/sign-in" className={classes.logoutButton}>
          <Logout style={{ color: "#78bd76" }} fontSize="large" />
          Sign Out
        </Link>
      </div>
     {/* <NewNavbar/>*/}
      <div>
        <div className={classes.profile}>
          <Tabs />
          <ProfileFromHandling classes={classes} />
        </div>
      </div>
    </Grid>
  );
};

export default Profile;
