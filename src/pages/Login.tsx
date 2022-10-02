import { Button, TextField, Grid, Box } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import { Redirect, Link } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidationForm } from "../components/validation";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import useStyles from "../components/styles/loginStyles";
import FlexiChargeLogoNoBorder from "../assets/FlexiChargeLogoNoBorder.svg";

const inputFieldValues = [
  {
    name: "username",
    label: "Email",
    id: "username",
    icon: <EmailOutlinedIcon style={{color: "#78bd76"}}/>,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    id: "user-password",
    icon: <LockIcon  style={{color: "#78bd76"}}/>,
  },
];

const Login = () => {
  const classes = useStyles();
  const {
    LogInhandleFormSubmit,
    handleInputValue,
    redirect,
    errors,
    msg,
    open,
    handleClose,
  } = ValidationForm();

  if (redirect) {
    return <Redirect to="/profile" />;
  }

  return (
    <Grid className={classes.body}>
      {/*<img className={classes.indexLogo} src={FlexiChargeLogoNoBorder}/>*/}
      <Grid container direction="column" className={classes.grid}>
        <Modal open={open} onClose={handleClose}>
          <Box className="backdrop">
            <div className="loader"></div>
          </Box>
        </Modal>
        <Grid container direction="column" className={classes.container}>
          <form autoComplete="off" onSubmit={LogInhandleFormSubmit}>
            <h1 className="formTitle">Sign in</h1>
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
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                className={classes.button}
              >
                Sign in
              </Button>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Link className={classes.links} to="/forgot-password">Forgot password?</Link>
              </Grid>
              <Grid item xs={6}>
                <Link className={classes.links} to="/sign-up"> <span style={{color: "#5e5eb7"}}> No account? </span> Sign Up</Link>
              </Grid>
            </Grid>
          </form>
          {msg ? <Alert severity="error">{msg}</Alert> : ""}{" "}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
