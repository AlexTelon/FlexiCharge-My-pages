import { Button, TextField, Grid, Box } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import InputAdornment from "@material-ui/core/InputAdornment";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ValidationForm } from "../components/validation";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Redirect, Link } from "react-router-dom";
import useStyles from "../components/styles/verifyAccountStyles";
import FlexiChargeLogoDarkGrey from "../assets/FlexiChargeLogoDarkGrey.svg";

const inputFieldValues = [
  {
    name: "username",
    label: "Email",
    id: "user-username",
    icon: <EmailOutlinedIcon style={{color: "#78bd76"}}/>,
  },
  {
    name: "verifyCode",
    label: "Verification code",
    id: "verifyCode",
    maxLength: 6,
    icon: <VpnKeyIcon style={{color: "#78bd76"}}/>,
  },
];

const VerifyAccount = () => {
  const classes = useStyles();

  const {
    verifyHandleFormSubmit,
    handleInputValue,
    handleClose,
    open,
    errors,
    msg,
    redirect,
  } = ValidationForm();

  if (!msg && redirect) {
    return <Redirect to="/sign-in" />;
  }

  return (
    <Grid container direction="column">
      <div className={classes.nav}>
        <Link to="/sign-in">
          <img className={classes.navLogo} src={FlexiChargeLogoDarkGrey}/>
        </Link>
      </div>
      <Grid container direction="column" className={classes.grid}>
        <Modal open={open} onClose={handleClose}>
          <Box className="backdrop">
            <div className="loader"></div>
          </Box>
        </Modal>
        <Grid container className={classes.container}>
          <form autoComplete="off" onSubmit={verifyHandleFormSubmit}>
            <h1>Verify</h1>
            <p>Verification code has been sent to your email.</p>
            {inputFieldValues.map((inputFieldValue, index) => {
              return (
                <Grid item key={index} xs={12}>
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
                    name={inputFieldValue.name}
                    label={inputFieldValue.label}
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
              Verify
            </Button>
            {msg ? <Alert severity="error">{msg}</Alert> : ""}
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VerifyAccount;
