import { Button, TextField, Grid, Box } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
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
			height: "0",
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
			backgroundImage: `url(${registerB})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			"&:hover": {
				boxShadow: theme.flexiCharge.boxShadow.button,
				transform: "translateY(-5px)",
			},
			width: "50%",
			minHeight: "3rem",
			marginTop: theme.spacing(2),
		},
		links: {
			margin: "auto",
			fontWeight: 500,
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
		label: "Username",
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
		name: "newPassword",
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
		handleClose,
		open,
		errors,
		msg,
		redirect,
	} = ValidationForm();

	if (!msg && redirect) {
		return <Redirect to="/verify" />;
	}
	return (
		<Grid container direction="column" className={classes.grid}>
			<Modal open={open} onClose={handleClose}>
				<Box className="backdrop">
					<div className="loader"></div>
				</Box>
			</Modal>
			<Grid container direction="column" className={classes.container}>
				<form autoComplete="off" onSubmit={RegisterhandleFormSubmit}>
					<Grid item xs={12}>
						<h1>Sign up</h1>
						{inputFieldValues.map((inputFieldValue, index) => {
							return (
								<TextField
									key={index}
									onChange={handleInputValue}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												{inputFieldValue.icon}
											</InputAdornment>
										),
									}}
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
								<Link to="/sign-in">Already have an account? Sign in</Link>
							</Grid>
						</Grid>
						{msg ? <Alert severity="error">{msg}</Alert> : ""}
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
};

export default Register;