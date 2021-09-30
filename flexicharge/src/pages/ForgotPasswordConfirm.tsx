import { Button, TextField, Grid, Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import { Redirect, Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidationForm } from "../components/validation";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

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
			backgroundColor: theme.flexiCharge.accent.primary,
			"&:hover": {
				background: theme.flexiCharge.accent.primary,
				boxShadow: theme.flexiCharge.boxShadow.button,
				transform: "translateY(-5px)",
			},
			maxWidth: "50%",
			maxHeight: "10vh",
			marginTop: theme.spacing(2),
			fontWeight: "bold",
			fontSize: ".7rem",
			color: theme.flexiCharge.primary.white,
		},
		input: {
			maxWidth: "5%",
			marginTop: "3rem",
			marginRight: ".5rem",
			minHeight: "2rem",
			minWidth: "2rem",
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
		id: "password",
		icon: <LockIcon />,
	},
	{
		name: "verificationCode",
		label: "Verification code",
		id: "verificationCode",
		icon: <VpnKeyIcon />,
	},
];
const ForgotPasswordConfirm = () => {
	const classes = useStyles();
	const { LogInhandleFormSubmit, handleInputValue, errors, msg, redirect } =
		ValidationForm();

	if (redirect) {
		console.log("hejsan");

		<Redirect to="/charging-sessions" />;
	}

	return (
		<Grid container direction="column" className={classes.grid}>
			<Grid container direction="column" className={classes.container}>
				<form autoComplete="off" onSubmit={LogInhandleFormSubmit}>
					<h2>Set new password</h2>
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
					<Button variant="contained" type="submit" className={classes.button}>
						Set new password
					</Button>
					<Box color="red">{msg}</Box>
				</form>
			</Grid>
		</Grid>
	);
};

export default ForgotPasswordConfirm;
