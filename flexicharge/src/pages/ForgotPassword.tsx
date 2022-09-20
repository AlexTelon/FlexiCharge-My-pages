import { Button, TextField, Grid, Box } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import { Redirect } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidationForm } from "../components/validation";
import EmailIcon from "@material-ui/icons/Email";
import useStyles from "../components/styles/forgotPasswordStyles";

const inputFieldValues = [
{
  name: "email",
  label: "Email",
  id: "user-email",
  icon: <EmailIcon />,
}
];

const ForgotPassword = () => {
  const classes = useStyles();
  const {
    ForgotPasswordHandleFormSubmit,
    handleInputValue,
    handleClose,
    open,
    errors,
    msg,
    redirect,
  } = ValidationForm();

  if (redirect) {
    return <Redirect to="/confirm-forgot-password" />;
  }

  return (
    <Grid container direction="column" className={classes.grid}>
      <Modal open={open} onClose={handleClose}>
        <Box className="backdrop">
          <div className="loader"></div>
        </Box>
      </Modal>
      <Grid container direction="column" className={classes.container}>
        <form autoComplete="off" onSubmit={ForgotPasswordHandleFormSubmit}>
          <h1>Forgot Password</h1>
          <p>
            Enter your username and we will send you a password reset link to
            your registered email.
          </p>
          {inputFieldValues.map((inputFieldValue, index) => {
            return (
              <Grid item key={index} xs={12} className={classes.gridItem}>
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
                  fullWidth
                  className={classes.textFields}
                  name={inputFieldValue.name}
                  label={inputFieldValue.label}
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
            Send password reset
          </Button>
          {msg ? <Alert severity="error">{msg}</Alert> : ""}{" "}
        </form>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
