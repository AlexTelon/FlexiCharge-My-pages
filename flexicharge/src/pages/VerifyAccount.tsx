import { Button, TextField, Box, Grid } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import { ValidationForm } from "../components/validation";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Redirect } from "react-router-dom";
import { SyntheticEvent, useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grid: {
			spacing: 0,
			alignItems: "center",
			justifyContent: "center",
			maxWidth: "40%",
			minWidth: "20vh",
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
		gridItem: {
			margin: "auto",
		},
		textField: {
			marginTop: "1rem",
			maxWidth: "50%",
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

const VerifyAccount = () => {
	const classes = useStyles();
	const [code, setCode] = useState(new Array(6).fill(""));
	const [username, setUsername] = useState("");

	const handleChange = (element: any, index: Number) => {
		if (isNaN(element.value)) return false;

		setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

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
					<Grid item xs={12} className={classes.gridItem}>
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}}
							name="username"
							label="Username"
							autoComplete="none"
							onChange={(e) => setUsername(e.target.value)}
							value={username}
							className={classes.textField}
						/>
					</Grid>
					<Grid item xs={12}>
						{code.map((data, index) => {
							return (
								<input
									className={classes.input}
									type="text"
									name="code"
									maxLength={1}
									key={index}
									value={data}
									onChange={(e) => handleChange(e.target, index)}
									onFocus={(e) => e.target.select()}
								/>
							);
						})}
						<p>{code.join("")}</p>
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
