import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../components/AuthService";
import BottomNavigationBar from "../components/BottomNavigation";
import Mobile from "../components/Mobile";
import Navbar from "../components/Navbar";
import useStyles from "../components/styles/profileStyles";
import { ReactComponent } from "../assets/editIcon.svg";

const Profile = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilytName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      history.push("/sign-in");
    } else {
      setFirstName(currentUser.name);
      setFamilytName(currentUser.family_name);
      setEmail(currentUser.email);
    }
  }, []);

  return (
    <>
      {Mobile() ? <Navbar /> : <BottomNavigationBar />}
      <div className={classes.profile}>
        <div className={classes.container}>
          <div className={classes.profile__items}>
            <div className={`${classes.profileInfo}`}>Firstname</div>
            <div className={classes.profileDescription}>{firstName}</div>
            <div>
              <ReactComponent />
            </div>
          </div>
          <div className={classes.profile__items}>
            <div className={classes.profileInfo}>Lastname</div>
            <div className={classes.profileDescription}>{familyName}</div>
            <div>
              <ReactComponent />
            </div>
          </div>
          <div className={classes.profile__items}>
            <div className={classes.profileInfo}>Email</div>
            <div className={classes.profileDescription}>{email}</div>
            <div>
              <ReactComponent />
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <form action="" method="post">
            <button className={classes.changePasswordButton} type="submit" onClick={(e) => {
                  e.preventDefault();
                  history.push("/change-password");

              }}>
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
