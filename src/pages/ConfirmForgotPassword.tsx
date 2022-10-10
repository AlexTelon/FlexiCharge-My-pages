import { Button, TextField, Grid, Box } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Redirect, Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidationForm } from "../components/validation";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import useStyles from "../components/styles/confirmForgotPasswordStyles";
import FlexiChargeLogoDarkGrey from "../assets/FlexiChargeLogoDarkGrey.svg";

const inputFieldValues = [
  {
    name: "username",
    label: "Email",
    id: "username",
    icon: <EmailOutlinedIcon style={{ color: "#78bd76" }} />,
  },
  {
    name: "newPassword",
    type: "password",
    label: "Password",
    id: "password",
    icon: <LockOutlinedIcon style={{ color: "#78bd76" }} />,
  },
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm password",
    id: "confirmPassword",
    icon: <LockOutlinedIcon style={{ color: "#78bd76" }} />,
  },
  {
    name: "verifyCode",
    label: "Verification code",
    id: "verifyCode",
    maxLength: 6,
    icon: <VpnKeyIcon style={{ color: "#78bd76" }} />,
  },
];

const ConfirmForgotPassword = () => {
  const classes = useStyles();
  const {
    ConfirmForgotPasswordHandleFormSubmit,
    handleInputValue,
    handleClose,
    open,
    errors,
    msg,
    redirect,
  } = ValidationForm();

  if (redirect) {
    return <Redirect to="/sign-in" />;
  }

  return (
    <Grid container direction="column">
      <div className={classes.nav}>
        <Link to="/sign-in">
          <img className={classes.navLogo} src={FlexiChargeLogoDarkGrey} />
        </Link>
      </div>
      <Grid container direction="column" className={classes.grid}>
        <Modal open={open} onClose={handleClose}>
          <Box className="backdrop">
            <div className="loader"></div>
          </Box>
        </Modal>
        <Grid container direction="column" className={classes.container}>
          <form
            autoComplete="off"
            onSubmit={ConfirmForgotPasswordHandleFormSubmit}
          >
            <h1>Set new password</h1>
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
                    inputProps={{
                      maxLength: inputFieldValue.maxLength,
                    }}
                    {...(errors[inputFieldValue.name] && {
                      error: true,
                      helperText: errors[inputFieldValue.name],
                    })}
                  />
                </Grid>
              );
            })}
            <Button
              variant="contained"
              type="submit"
              className={classes.button}
            >
              Set new password
            </Button>
            {msg ? <Alert severity="error">{msg}</Alert> : ""}{" "}
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ConfirmForgotPassword;
