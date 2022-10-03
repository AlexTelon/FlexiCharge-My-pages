import { Button, TextField, Grid, Box } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Redirect } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidationForm } from "../components/validation";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import useStyles from "../components/styles/confirmForgotPasswordStyles";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FlexiChargeLogoNoBorder from "../assets/FlexiChargeLogoNoBorder.svg";

const inputFieldValues = [
  {
    name: "email",
    label: "Email",
    id: "user-email",
    icon: <EmailOutlinedIcon style={{color: "#78bd76"}}/>,
  },
  {
    name: "newPassword",
    type: "password",
    label: "Password",
    id: "user-password",
    icon: <LockOutlinedIcon  style={{color: "#78bd76"}}/>,
  },
  {
    name: "confirmNewPassword",
    label: "Confirm New Password",
    type: "password",
    id: "confirmNewPassword",
    icon: <LockOutlinedIcon  style={{color: "#78bd76"}}/>,
  },
  {
    name: "verifyCode",
    label: "Verification code",
    id: "verifyCode",
    maxLength: 6,
    icon: <VpnKeyOutlinedIcon style={{color: "#78bd76"}}/>,
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
        {/*<img className={classes.indexLogo} src={FlexiChargeLogoNoBorder}/>*/}
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
            <Button variant="contained" type="submit" className={classes.button}>
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
