import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../components/AuthService";
import BottomNavigationBar from "../components/BottomNavigation";
import Mobile from "../components/Mobile";
import Navbar from "../components/Navbar";
import useStyles from "../components/styles/profileStyles";

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
            <div className={classes.profileDescription}>{firstName}</div>
          </div>
          <div className={classes.profile__items}>
            <div className={classes.profileInfo}>Lastname</div>
            <div className={classes.profileDescription}>{familyName}</div>
          </div>
          <div className={classes.profile__items}>
            <div className={classes.profileInfo}>Username</div>
            <div className={classes.profileDescription}>{userName}</div>
          </div>
          <div className={classes.profile__items}>
            <div className={classes.profileInfo}>Email</div>
            <div className={classes.profileDescription}>{email}</div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <form action="" method="post">
            <button className={classes.changePasswordButton} type="submit">
              Change password
            </button>
          </form>
          <form action="" method="post">
            <button className={classes.deleteButton} type="submit">
              Delete profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
