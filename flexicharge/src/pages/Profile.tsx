import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../components/AuthService";
import BottomNavigationBar from "../components/BottomNavigation";
import Mobile from "../components/Mobile";
import Navbar from "../components/Navbar";
import useStyles from "../components/styles/profileStyles.js";

const Profile = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilytName] = useState("");
  const [email, setEmail] = useState("");
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
      setUserName(currentUser.username);
    }
  }, []);

  return (
    <>
      {Mobile() ? <Navbar /> : <BottomNavigationBar />}
      <div className={classes.profile}>
        <div className={classes.container}>
          <div className={classes.profile__items}>
            <div className={classes.profileInfo}>Firstname</div>
            <div>Ezaz</div>
          </div>
          <div className={classes.profile__items}>
            <div className={classes.profileInfo}>Lastname</div>
            <div>Hathalia</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
