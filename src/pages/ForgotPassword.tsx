import { Button, TextField, Grid, Box } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import { Redirect } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidationForm } from "../components/validation";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import useStyles from "../components/styles/forgotPasswordStyles";
import FlexiChargeLogoNoBorder from "../assets/FlexiChargeLogoNoBorder.svg";

const inputFieldValue = {
  name: "email",
  label: "Email",
  id: "email",
  icon: <EmailOutlinedIcon style={{color: "#78bd76"}} />,
};

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
    <Grid container direction="column">
      <div className={classes.nav}>
        {/*<img className={classes.indexLogo} src={FlexiChargeLogoNoBorder}/>*/}
      </div>
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
              Enter your email and we will send you a password reset link to
              your registered email.
            </p>
            <Grid item xs={12} className={classes.gridItem}>
              <TextField
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
            <Button variant="contained" type="submit" className={classes.button}>
              Send password reset
            </Button>
            {msg ? <Alert severity="error">{msg}</Alert> : ""}{" "}
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
