import { Button, TextField, Grid, Box, Container } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Redirect, Link } from "react-router-dom";
import { ValidationForm } from "../components/validation";
import registerB from "../assets/registerB.svg";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grid: {
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
			alignItems: "center",
			justifyContent: "center",
			padding: "1rem",
		},
		textFields: {
			margin: "1rem",
		},
		gridItem: {
			margin: "auto",
		},
		button: {
			backgroundImage: `url(${registerB})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			"&:hover": {
				boxShadow: theme.flexiCharge.boxShadow.button,
				transform: "translateY(-5px)",
			},
			width: "40%",
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
		name: "firstName",
		label: "First Name",
		id: "user-first-name",
		icon: <AccountCircle />,
	},

	{
		name: "lastName",
		label: "Last Name",
		id: "user-Last-name",
		icon: <AccountCircle />,
	},
	{
		name: "username",
		label: "User Name",
		id: "username",
		icon: <AccountCircle />,
	},
	{
		name: "email",
		label: "Email",
		id: "user-email",
		icon: <EmailIcon />,
	},
	{
		name: "password",
		type: "password",
		label: "Password",
		id: "user-password",
		icon: <LockIcon />,
	},
];

const Register = () => {
	const classes = useStyles();

	const {
		handleInputValue,
		RegisterhandleFormSubmit,
		formIsValid,
		errors,
		msg,
		redirect,
	} = ValidationForm();

	if (!msg && redirect) {
		return <Redirect to="/verification" />;
	}
	return (
		<Grid container direction="column" className={classes.grid}>
			<h1>Register</h1>
			<Grid container className={classes.container}>
				<form autoComplete="off" onSubmit={RegisterhandleFormSubmit}>
					<Grid item xs={12} className={classes.gridItem}>
						{inputFieldValues.map((inputFieldValue, index) => {
							return (
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
									style={{ margin: "1rem" }}
									name={inputFieldValue.name}
									label={inputFieldValue.label}
									type={inputFieldValue.type}
									autoComplete="none"
									{...(errors[inputFieldValue.name] && {
										error: true,
										helperText: errors[inputFieldValue.name],
									})}
								/>
							);
						})}
					</Grid>
					<Box color="text.secondary">
						Password must at least have 8 characters including a number and both
						lowercase and uppercase letter.
					</Box>
					<Button
						variant="contained"
						type="submit"
						className={classes.button}
						disabled={!formIsValid()}
					></Button>
					<Grid container className={classes.links}>
						<Grid item xs={5}>
							<Link to="/forgot-password">Forgot password?</Link>
						</Grid>
						<Grid item xs={7}>
							<Link to="/login">Already have an account? Sign in</Link>
						</Grid>
					</Grid>
					<Box color="red">{msg}</Box>
				</form>
			</Grid>
		</Grid>
	);
};

export default Register;
