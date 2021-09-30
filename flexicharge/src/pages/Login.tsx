import { Button, TextField, Grid, Box } from "@material-ui/core";
import { Redirect, Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidationForm } from "../components/validation";
import loginB from "../assets/loginB.svg";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grid: {
			spacing: 0,
			alignItems: "center",
			justifyContent: "center",
			maxWidth: "40%",
			minWidth: "40vh",
			minHeight: "100vh",
			margin: "auto",
		},
		container: {
			backgroundColor: theme.flexiCharge.primary.white,
			borderRadius: "0.5rem",
			justifyContent: "center",
			padding: "1rem",
		},
		gridItem: {
			margin: "auto",
		},
		textFields: {
			maxWidth: "80%",
		},
		button: {
			backgroundImage: `url(${loginB})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			"&:hover": {
				boxShadow: theme.flexiCharge.boxShadow.button,
				transform: "translateY(-5px)",
			},
			width: "50%",
			minHeight: "5vh",
			marginTop: theme.spacing(2),
		},
		links: {
			marginTop: theme.spacing(2),
		},
	})
);

const inputFieldValues = [
	{
		name: "username",
		label: "Username",
		id: "username",
		icon: <AccountCircle />,
	},
	{
		name: "password",
		type: "password",
		label: "Password",
		id: "user-password",
		icon: <LockIcon />,
	},
];
const Login = () => {
	const classes = useStyles();
	const { LoginHandleFormSubmit, handleInputValue, errors, msg, redirect } =
		ValidationForm();

	if (redirect) {
		console.log("hejsan");

		<Redirect to="/charging-sessions" />;
	}

	return (
		<Grid container direction="column" className={classes.grid}>
			<h1>Log in</h1>
			<Grid container direction="column" className={classes.container}>
				<form autoComplete="off" onSubmit={LoginHandleFormSubmit}>
					{inputFieldValues.map((inputFieldValue, index) => {
						return (
							<Grid item key={index} xs={12} className={classes.gridItem}>
								<TextField
									key={index}
									onChange={handleInputValue}
									onBlur={handleInputValue}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												{inputFieldValue.icon}
											</InputAdornment>
										),
									}}
									fullWidth
									style={{ marginTop: "1rem" }}
									className={classes.textFields}
									name={inputFieldValue.name}
									label={inputFieldValue.label}
									type={inputFieldValue.type}
									autoComplete="none"
									{...(errors[inputFieldValue.name] && {
										error: true,
										helperText: errors[inputFieldValue.name],
									})}
								/>
							</Grid>
						);
					})}
					<Grid item xs={12}>
						<Button
							variant="contained"
							type="submit"
							className={classes.button}
						/>
					</Grid>
					<Grid container className={classes.links}>
						<Grid item xs={6}>
							<Link to="/forgot-password">Forgot password?</Link>
						</Grid>
						<Grid item xs={6}>
							<Link to="/register">No account? Sign Up</Link>
						</Grid>
					</Grid>
					<Box color="red">{msg}</Box>
				</form>
			</Grid>
		</Grid>
	);
};

export default Login;
