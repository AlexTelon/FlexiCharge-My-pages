import { Button, TextField, Grid, Box } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import { Redirect, Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidationForm } from "../components/validation";
import useStyles from "../components/styles/changePasswordStyles";
import FlexiChargeLogoDarkGrey from "../assets/FlexiChargeLogoDarkGrey.svg";
import Logout from "@mui/icons-material/Logout";

const inputFieldValues = [
  {
    name: "password",
    label: "Current Password",
    type: "password",
    id: "password",
    icon: <LockOutlinedIcon style={{ color: "#78bd76" }} />,
  },
  {
    name: "newPassword",
    label: "New Password",
    type: "password",
    id: "newPassword",
    icon: <LockTwoToneIcon style={{ color: "#78bd76" }} />,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    id: "confirmPassword",
    icon: <LockIcon style={{ color: "#78bd76" }} />,
  },
];

const ChangePassword = () => {
  const classes = useStyles();
  const { ChangePassword, handleInputValue, errors, msg, redirect } =
    ValidationForm();

  console.log(ChangePassword);
  if (redirect) {
    return <Redirect to="/profile" />;
  }

  return (
    <Grid container direction="column">
      <div className={classes.nav}>
        <Link to="/profile">
          <img className={classes.navLogo} src={FlexiChargeLogoDarkGrey} />
        </Link>

        <Link to="/sign-in" className={classes.logoutButton}>
          <Logout style={{ color: "#78bd76" }} fontSize="large" />
          Sign Out
        </Link>
      </div>
      <Grid container direction="column" className={classes.grid}>
        <Grid container direction="column" className={classes.container}>
          <form autoComplete="off" onSubmit={ChangePassword}>
            <h1>Change password</h1>
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
    </Grid>
  );
};

export default ChangePassword;
