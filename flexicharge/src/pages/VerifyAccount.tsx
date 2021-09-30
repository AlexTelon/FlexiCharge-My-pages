import { Button, TextField, Box, Grid } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ValidationForm } from "../components/validation";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Redirect } from "react-router-dom";
import { useState } from "react";

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
			fontWeight: "bolder",
		},
		container: {
			backgroundColor: theme.flexiCharge.primary.white,
			borderRadius: "0.5rem",
			alignItems: "center",
			justifyContent: "center",
			padding: "1rem",
		},
		gridItemInputs: {
			marginTop: "3rem",
		},
		gridItemLabel: {
			textAlign: "right",
			marginTop: "3rem",
		},
		textField: {
			marginTop: "1rem",
			maxWidth: "80%",
		},
		button: {
			backgroundColor: theme.flexiCharge.accent.primary,
			"&:hover": {
				background: theme.flexiCharge.accent.primary,
				boxShadow: theme.flexiCharge.boxShadow.button,
				transform: "translateY(-5px)",
			},
			maxWidth: "80%",
			minHeight: "48px",
			marginTop: theme.spacing(2),
			fontWeight: "bolder",
			fontSize: "inherit",
			margin: "auto",
			color: theme.flexiCharge.primary.white,
		},
		input: {
			maxWidth: "5%",
			marginRight: ".5rem",
			minHeight: "2.5rem",
			minWidth: "2.5rem",
			textAlign: "center",
			fontWeight: "bolder",
		},
	})
);

const VerifyAccount = () => {
	const classes = useStyles();
	const [code, setCode] = useState(new Array(6).fill(""));
	const [username, setUsername] = useState("");
	const [value, setValue] = useState("");

	const handleChange = (element: any, index: Number) => {
		if (isNaN(element.value)) return false;

		setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

		if (element.value.length > 1) {
			console.log(element, "e");
			element = element.nextSibling;
			console.log(element, "e2");
			setValue("2");
		}
		console.log(element.value);
		if (element.nextSibling) {
			element.nextSibling.focus();
		}
	};

	const { verifyHandleFormSubmit, errors, msg, redirect } = ValidationForm();

	if (!msg && redirect) {
		return <Redirect to="/login" />;
	}

	return (
		<Grid container direction="column" className={classes.grid}>
			<Grid container className={classes.container}>
				<form
					autoComplete="off"
					onSubmit={(e) => verifyHandleFormSubmit(e, username, code)}
				>
					<p>Verification code has been sent to your email.</p>
					<Grid item xs={12}>
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}}
							fullWidth
							name="username"
							label="Username"
							autoComplete="none"
							onChange={(e) => setUsername(e.target.value)}
							value={username}
							className={classes.textField}
						/>
					</Grid>
					<Grid container>
						<Grid item xs={2} className={classes.gridItemLabel}>
							<p>Code:</p>
						</Grid>
						<Grid item xs={10} className={classes.gridItemInputs}>
							{code.map((data, index) => {
								return (
									<input
										className={classes.input}
										type="text"
										name="code"
										maxLength={6}
										key={index}
										value={value}
										onChange={(e) => handleChange(e.target, index)}
										onFocus={(e) => e.target.select()}
									/>
								);
							})}
						</Grid>
						<Button
							variant="contained"
							type="submit"
							className={classes.button}
						>
							Verify
						</Button>
					</Grid>
					<Box color="red">{msg}</Box>
				</form>
			</Grid>
		</Grid>
	);
};

export default VerifyAccount;
