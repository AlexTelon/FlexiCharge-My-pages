import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
	Button,
	createStyles,
	makeStyles,
	Grid,
	Theme,
} from "@material-ui/core";
import ChargingSessions from "./ChargingSessions";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Nav from "../components/Nav";
import auth from "../components/AuthService";
import Login from "./Login";
import logo from "../assets/header.svg";
import { Link } from "react-router-dom";
import loginB from "../assets/loginB.svg";
import registerB from "../assets/registerB.svg";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		imgItem: {
			width: "90%",
			height: "5rem",
			marginBottom: "2rem",
		},
		grid: {
			alignItems: "center",
			justifyContent: "center",
			margin: "auto",
			maxWidth: "60%",
			minHeight: "100vh",
		},
		button: {
			backgroundPosition: "50% 25%",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			"&:hover": {
				boxShadow: theme.flexiCharge.boxShadow.button,
				transform: "translateY(-5px)",
			},
			width: "50%",
			height: "7vh",
			minHeight: "5vh",
			margin: theme.spacing(2),
		},
	})
);

const Home = () => {
	const classes = useStyles();
	console.log(auth.getCurrentUser());

	return (
		<Grid container direction="column" className={classes.grid}>
			<img src={logo} className={classes.imgItem} />
			<Grid container>
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
};

export default Home;
