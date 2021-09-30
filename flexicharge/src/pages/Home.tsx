import {
	Button,
	createStyles,
	makeStyles,
	Grid,
	Theme,
	Container,
	Box,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import logo from "../assets/header.svg";
import { Link } from "react-router-dom";
import loginB from "../assets/loginB.svg";
import registerB from "../assets/registerB.svg";
import AuthService from "../components/AuthService";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		imgItem: {
			width: "100%",
			height: "5rem",
			marginBottom: "5rem",
		},
		grid: {
			spacing: 0,
			alignItems: "center",
			justifyContent: "center",
			minHeight: "100vh",
		},
		gridItem: {
			borderRadius: "0.5rem",
			maxWidth: "10rem",
			padding: "1rem",
		},
		buttonGrid: {
			maxWidth: "50%",
		},
		button: {
			backgroundPosition: "50% 25%",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			"&:hover": {
				boxShadow: theme.flexiCharge.boxShadow.button,
				transform: "translateY(-5px)",
			},
			width: "90%",
			minHeight: "5vh",
			margin: theme.spacing(2),
		},
	})
);

const Home = () => {
	const classes = useStyles();
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const currentUser = AuthService.getCurrentUser();
		console.log("whats uppppppp", currentUser);
		if (!currentUser) {
			console.log("there is no user");
		} else {
			console.log("there is  user");
			setCurrentUser(currentUser);
		}
	}, []);
	console.log("dilkfhsiodfhs", currentUser);

	if (currentUser) {
		return (
			<Grid container direction="column" className={classes.grid}>
				<Grid container className={classes.buttonGrid}>
					<img src={logo} className={classes.imgItem} />
					<Grid item xs={12}>
						<Button
							component={Link}
							to="/login"
							variant="contained"
							className={classes.button}
							style={{
								backgroundImage: `url(${loginB})`,
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							component={Link}
							to="/register"
							variant="contained"
							className={classes.button}
							style={{
								backgroundImage: `url(${registerB})`,
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
		);
	} else {
		return <Navbar />;
	}
};

export default Home;
