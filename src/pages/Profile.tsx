import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../components/AuthService";
import useStyles from "../components/styles/profileStyles";
import Tabs from "../components/Tabs";
import { Link } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import { Grid } from "@material-ui/core";
import FlexiChargeLogoDarkGrey from "../assets/FlexiChargeLogoDarkGrey.svg";

const Profile = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setFamilytName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const history = useHistory();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      history.push("/sign-in");
    } else {
      setFirstName(currentUser.firstName);
      setFamilytName(currentUser.lastName);
      setEmail(currentUser.email);
      setPhoneNumber(currentUser.phoneNumber);
      setAddress(currentUser.streetAddress);
      setUserName(currentUser.username);
    }
  }, []);

  return (
    <Grid container direction="column">
      <div className={classes.nav}>
        <Link to="/profile">
          <img className={classes.navLogo} src={FlexiChargeLogoDarkGrey} />
        </Link>

        <Link to="/sign-in" className={classes.logoutButton} onClick={AuthService.logout}>
          <Logout style={{ color: "#78bd76" }} fontSize="large" />
          Sign Out
        </Link>
      </div>
      <div>
        <div className={classes.profile}>
          <Tabs />
        </div>
      </div>
    </Grid>
  );
};

export default Profile;
