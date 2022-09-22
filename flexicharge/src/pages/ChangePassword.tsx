import { Button, TextField, Grid, Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import { Redirect, Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidationForm } from "../components/validation";
import Navbar from "../components/Navbar";
import Mobile from "../components/Mobile";
import BottomNavigationBar from "../components/BottomNavigation";
import useStyles from "../components/styles/changePasswordStyles";

const inputFieldValues = [
  {
    name: "password",
    label: "password",
    id: "password",
    icon: <LockIcon />,
  },
  {
    name: "newPassword",
    label: "New Password",
    id: "newPassword",
    icon: <LockIcon />,
  },
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    id: "confirmPassword",
    icon: <LockIcon />,
  },
];

const ChangePassword = () => {
  const classes = useStyles();
  const { ChangePassword, handleInputValue, errors, msg, redirect } =
    ValidationForm();

  if (redirect) {
    return <Redirect to="/profile" />;
  }

  return (
    <>
      {Mobile() ? <Navbar /> : <BottomNavigationBar />}
      <Grid container direction="column" className={classes.grid}>
        <Grid container direction="column" className={classes.container}>
          <form autoComplete="off" onSubmit={ChangePassword}>
            <h2>Change password</h2>
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
                    autoComplete="none"
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
            <Box color="red">{msg}</Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default ChangePassword;
