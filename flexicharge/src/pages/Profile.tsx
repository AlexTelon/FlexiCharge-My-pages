import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../components/AuthService";
import BottomNavigationBar from "../components/BottomNavigation";
import Mobile from "../components/Mobile";
import Navbar from "../components/Navbar";
import useStyles from "../components/styles/profileStyles";
import PromptView from "../components/PromptView";
import ProfileElements from "../components/ProfileElements";
import ProfileButtons from "../components/ProfileButtons";

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
          <PromptView classes={classes}></PromptView>
          <ProfileElements items={firstName} classes={classes}>
            Firstname
          </ProfileElements>
          <ProfileElements items={familyName} classes={classes}>
            Lastname
          </ProfileElements>
          <ProfileElements items={email} classes={classes}>
            Email
          </ProfileElements>
          <ProfileElements classes={classes}>Adress</ProfileElements>
          <ProfileElements classes={classes}>Phone number</ProfileElements>
        </div>
        <ProfileButtons classes={classes}></ProfileButtons>
      </div>
    </>
  );
};

export default Profile;
