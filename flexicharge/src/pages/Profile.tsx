import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import AuthService from "../components/AuthService";
import Navbar from "../components/Navbar";
import BottomNavigationBar from "../components/BottomNavigation";
import Mobile from "../components/Mobile";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		profile: {
			spacing: 0,
			alignItems: "center",
			justifyContent: "center",
			maxWidth: "60%",
			minWidth: "20vh",
			minHeight: "100vh",
			margin: "auto",
		},
		container: {
			backgroundColor: theme.flexiCharge.primary.white,
			borderRadius: "0.5rem",
			justifyContent: "center",
			padding: "1rem",
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
			console.log("there is  user");
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
