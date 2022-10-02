import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../components/AuthService";
import useStyles from "../components/styles/profileStyles";
import { ReactComponent } from "../assets/editIcon.svg";
import Tabs from "../components/Tabs";

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
    <div>
      <div className={classes.profile}>
        <Tabs />
        <div className={classes.buttonContainer}>
          <form action="" method="post">
            <button
              className={classes.changePasswordButton}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                history.push("/change-password");
              }}
            >
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
    </div>
  );
};

export default Profile;
