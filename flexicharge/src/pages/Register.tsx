import { Button, TextField, Grid, Box } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Redirect, Link } from "react-router-dom";
import { ValidationForm } from "../components/validation";
import useStyles from "../components/styles/registerStyles";
import AccountLink from "../components/AccountLink";

const inputFieldValues = [
  /* {
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
  },*/
  {
    name: "email",
    label: "Email",
    id: "user-email",
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
    type: "password",
    label: "Confirm Password",
    id: "user-confirm-password",
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
    <Grid container direction="column" className={classes.grid}>
      <Modal open={open} onClose={handleClose}>
        <Box className="backdrop">
          <div className="loader"></div>
        </Box>
      </Modal>
      <Grid container direction="column" className={classes.container}>
        <form autoComplete="off" onSubmit={RegisterhandleFormSubmit}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
          >
            <h1 className={classes.registerTitle}>Sign Up</h1>
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
            <Grid container justifyContent="center" item xs={12}>
              <Button
                variant="contained"
                type="submit"
                className={classes.button}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid container className={classes.links}>
              <Grid item xs={6}>
                <Link to="/forgot-password" className={classes.forgotPassword}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link to="/sign-in" style={{ textDecoration: "none" }}>
                  <AccountLink classes={classes}></AccountLink>
                </Link>
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
