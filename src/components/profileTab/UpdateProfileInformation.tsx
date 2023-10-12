import Box from "@mui/material/Box";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import useStyles from "../styles/profileInformationStyles";
import { ValidationForm } from "../../utils/pageValidation/validation";
import Alert from "@mui/material/Alert";
import AuthService from "../AuthService";
import Profile from "../../pages/Profile"
import { Redirect } from "react-router-dom";


const UpdateProfileInformation = (props: any) => {
  const inputFieldValues = [
    {
      name: "firstName",
      currentValue: "Example: Peter",
      label: "First name: ",
      type: "text",
      id: "firstName",
    },
    {
      name: "lastName",
      currentValue: "Example: Johansson",
      label: "Last name: ",
      type: "text",
      id: "lastName",
    },
    {
      name: "phoneNumber",
      currentValue: "Example: +46123456789",
      label: "Phone Number: ",
      type: "text",
      id: "phoneNumber",
    },
    {
      name: "streetAddress",
      currentValue: "Example: Bankeryd2",
      label: "Street address: ",
      type: "text",
      id: "streetAddress",
    },
    {
      name: "zipCode",
      currentValue: "Example: 12345",
      label: "Zip code: ",
      type: "text",
      id: "zipCode",
    },
    {
      name: "city",
      currentValue: "Example: Stockholm",
      label: "City: ",
      type: "text",
      id: "city",
    },
    {
      name: "country",
      currentValue: "Example: Sweden",
      label: "Country: ",
      type: "text",
      id: "country",
    },
  ];
  const classes = useStyles();
  const { UpdateUserProfile, handleInputValue, errors, msg } = ValidationForm();

  async function fetchNewInfoFromTextArea(){
    
    let listOfNewProfileInfo = [];
    /*
      For next year, I'm not sure why this for loop doesn't work.
      It sends the value of the textareas twice, we only want the value once and then send it.
      
    for (let i = 0; i < inputFieldValues.length; i = i+1){
      listOfNewProfileInfo.push(document.getElementById("index " + i + " of textareas") as HTMLInputElement);
      console.log(i + " DETTA ÄR i")
      console.log(listOfNewProfileInfo.push(document.getElementById("index " + i + " of textareas") as HTMLInputElement) + " THIS IS THE INPUTELEMENT");
      console.log(listOfNewProfileInfo[i].value + " THIS IS THE VALUE FROM THE INPUTELEMENT ABOVE");
    }
    */
    listOfNewProfileInfo.push(document.getElementById("index " + 0 + " of textareas") as HTMLInputElement);
    listOfNewProfileInfo.push(document.getElementById("index " + 1 + " of textareas") as HTMLInputElement);
    listOfNewProfileInfo.push(document.getElementById("index " + 2 + " of textareas") as HTMLInputElement);
    listOfNewProfileInfo.push(document.getElementById("index " + 3 + " of textareas") as HTMLInputElement);
    listOfNewProfileInfo.push(document.getElementById("index " + 4 + " of textareas") as HTMLInputElement);
    listOfNewProfileInfo.push(document.getElementById("index " + 5 + " of textareas") as HTMLInputElement);
    listOfNewProfileInfo.push(document.getElementById("index " + 6 + " of textareas") as HTMLInputElement);
    await AuthService.updateUserProfile(
      listOfNewProfileInfo[0].value,
      listOfNewProfileInfo[1].value,
      listOfNewProfileInfo[2].value,
      listOfNewProfileInfo[3].value,
      listOfNewProfileInfo[4].value,
      listOfNewProfileInfo[5].value,
      listOfNewProfileInfo[6].value,
    );
    console.log(listOfNewProfileInfo.push(document.getElementById("index " + 0 + " of textareas") as HTMLInputElement));
    console.log(listOfNewProfileInfo[0].value);
  }
  



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
                  id={"index " + index + " of textareas"}
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
              type="button"
              variant="contained"
              onClick={fetchNewInfoFromTextArea}
            >Change
            </Button>
            <Button
              className={classes.cancelbutton}
              type="submit"
              variant="contained"
              onClick={(e: any) => {
                e.setIsOpen(e.isOpen);
              }}
     
            >Cancel
            </Button>
          </form>
        </div>
      </Box>
      {msg ? <Alert severity="error">{msg}</Alert> : ""}{" "}
    </div>
  );
};

export default UpdateProfileInformation;
