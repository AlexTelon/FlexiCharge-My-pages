import Box from "@mui/material/Box";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import useStyles from "../styles/profileInformationStyles";
import { ValidationForm } from "../../utils/pageValidation/validation";
import Alert from "@mui/material/Alert";
import AuthService from "../AuthService";

const UpdateProfileInformation = (props: any) => {
  const inputFieldValues = [
    {
      name: "firstName",
      currentValue: "Example: Pelle",
      value: "",
      label: "First name: ",
      type: "text",
      id: "firstName",
    },
    {
      name: "lastName",
      currentValue: "Example: Johansson",
      value: "",
      label: "Last name: ",
      type: "text",
      id: "lastName",
    },
    {
      name: "phoneNumber",
      currentValue: "Example: +46702682779",
      value: "",
      label: "Phone Number: ",
      type: "text",
      id: "phoneNumber",
    },
    {
      name: "streetAddress",
      currentValue: "Example: Slottsgatan 2",
      value: "",
      label: "Street address: ",
      type: "text",
      id: "streetAddress",
    },
    {
      name: "zipCode",
      currentValue: "Example: 12345",
      value: "",
      label: "Zip code: ",
      type: "text",
      id: "zipCode",
    },
    {
      name: "city",
      currentValue: "Example: Stockholm",
      value: "",
      label: "City: ",
      type: "text",
      id: "city",
    },
    {
      name: "country",
      currentValue: "Example: Spain",
      value: "",
      label: "Country: ",
      type: "text",
      id: "country",
    },
  ];
  /*AuthService.updateUserProfile(
    inputFieldValues[0].value,
    inputFieldValues[1].value,
    inputFieldValues[2].value,
    inputFieldValues[3].value,
    inputFieldValues[4].value,
    inputFieldValues[5].value,
    inputFieldValues[6].value
    );*/
  const classes = useStyles();
  const { UpdateUserProfile, handleInputValue, errors, msg } = ValidationForm();

  return (
    <div className={`${classes.editBox}`}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            margin: "48px",
            width: "25ch",
            display: "flex",
            flexDirection: "column",
          },
          maxHeight: "100%",
          overflow: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        <div className={`${classes.editContainer} `}>
          <form autoComplete="off" onSubmit={UpdateUserProfile}>
            {inputFieldValues.map((inputFieldValue, index) => {
              return (
                <TextField
                  key={index}
                  name={inputFieldValue.name}
                  label={inputFieldValue.label}
                  type={inputFieldValue.type}
                  multiline
                  maxRows={4}
                  placeholder={inputFieldValue.currentValue}
                  onChange={handleInputValue}
                  variant="standard"
                  onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
                  autoComplete="none"
                  {...(errors[inputFieldValue.name] && {
                    error: true,
                    helperText: errors[inputFieldValue.name],
                  })}
                />
              );
            })}
            <Button
              className={classes.changebutton}
              type="submit"
              variant="contained"
              onClick={(e: any) => {e.AuthService.updateUserProfile(
                inputFieldValues[0].value,
                inputFieldValues[1].value,
                inputFieldValues[2].value,
                inputFieldValues[3].value,
                inputFieldValues[4].value,
                inputFieldValues[5].value,
                inputFieldValues[6].value
              );}}
            >
              Change
            </Button>
            <Button
              className={classes.cancelbutton}
              type="submit"
              variant="contained"
              onClick={(e: any) => {
                e.setIsOpen(e.isOpen);
              }}
            >
              Cancel
            </Button>
          </form>
        </div>
      </Box>
      {msg ? <Alert severity="error">{msg}</Alert> : ""}{" "}
    </div>
  );
};

export default UpdateProfileInformation;
