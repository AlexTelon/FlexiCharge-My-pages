import { Button, TextField, Grid, Box } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Redirect, Link } from "react-router-dom";
//import { ValidationForm } from "../components/pageValidation/registerValidation";
import { ValidationForm } from "../utils/pageValidation/validation";
import useStyles from "../components/styles/registerStyles";
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
    id: "user-password",
    icon: <LockOutlinedIcon style={{ color: "#78bd76" }} />,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    id: "confirmPassword",
    icon: <LockOutlinedIcon style={{ color: "#78bd76" }} />,
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
                    fullWidth
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
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <Link className={classes.links} to="/forgot-password">Forgot password?</Link>
                </Grid>
                <Grid item xs={6}>
                  <Link className={classes.links} to="/sign-in"> <span style={{ color: "#5e5eb7" }}> Already have an account? </span> Sign in</Link>
                </Grid>
              </Grid>
              {msg ? <Alert severity="error">{msg}</Alert> : ""}
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
