import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../components/AuthService";
import BottomNavigationBar from "../components/BottomNavigation";
import Mobile from "../components/Mobile";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      spacing: 0,
      maxWidth: "60%",
      minWidth: "20vh",
      minHeight: "100vh",
      margin: "auto",
      marginTop: "50px",
    },
    container: {
      backgroundColor: theme.flexiCharge.primary.white,
      borderRadius: "16",
      justifyContent: "center",
      padding: "100px",
    },
  })
);

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
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">First Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">{firstName}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Family Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">{familyName}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Username</h6>
                </div>
                <div className="col-sm-9 text-secondary">{userName}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">{email}</div>
              </div>
              <hr />
              <button
                type="button"
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/change-password");
                }}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
