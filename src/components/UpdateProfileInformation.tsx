import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useStyles from "../components/styles/profileInformationStyles";
import { useState } from "react";

const UpdateProfileInformation = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = useState(props.label);
  const [enteredFirstName, setEnteredFirstName] = useState(
    props.user.firstName
  );
  const [enteredLastName, setEnteredLastName] = useState(props.user.lastName);
  const [enteredEmail, setEnteredEmail] = useState(props.user.email);
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState(
    props.user.phonenumber
  );
  const [enterdAddress, setEnteredAddress] = useState(props.user.address);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const firstNameChangeHandler = (event: any) => {
    setEnteredFirstName(event.target.value);
  };
  const LastNameChangeHandler = (event: any) => {
    setEnteredLastName(event.target.value);
  };
  const emailChangeHandler = (event: any) => {
    setEnteredEmail(event.target.value);
  };
  const phoneNumberChangeHandler = (event: any) => {
    setEnteredPhoneNumber(event.target.value);
  };
  const addressChangeHandler = (event: any) => {
    setEnteredAddress(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    const updatedUserInformation = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      phoneNumber: enteredPhoneNumber,
      address: enterdAddress,
    };
    console.log(updatedUserInformation);
  };
  console.log(enteredFirstName);
  console.log(enteredLastName);
  console.log(enteredEmail);
  console.log(enterdAddress);

  return (
    <div className={`${classes.editBox}`}>
      <form method="post" onSubmit={submitHandler}>
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
          }}
          noValidate
          autoComplete="off"
        >
          <div className={`${classes.editContainer} `}>
            <TextField
              id="standard-multiline-flexible"
              label="Firstname"
              multiline
              maxRows={4}
              value={enteredFirstName}
              placeholder={props.user.firstName}
              onChange={firstNameChangeHandler}
              variant="standard"
              onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Lastname"
              multiline
              maxRows={4}
              value={enteredLastName}
              placeholder={props.user.lastName}
              onChange={LastNameChangeHandler}
              variant="standard"
              onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Email"
              multiline
              maxRows={4}
              value={enteredEmail}
              placeholder={props.user.email}
              onChange={emailChangeHandler}
              variant="standard"
              onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Phone"
              multiline
              maxRows={4}
              value={enteredPhoneNumber}
              placeholder={props.user.phonenumber}
              onChange={phoneNumberChangeHandler}
              variant="standard"
              onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Address"
              multiline
              maxRows={4}
              value={enterdAddress}
              placeholder={props.user.address}
              onChange={addressChangeHandler}
              variant="standard"
              onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
            />
            <div>
              <button type="submit">Change</button>
            </div>
            <div>
              <button type="submit" onClick={(e: any) => e.setIsOpen(e.isOpen)}>
                cancel
              </button>
            </div>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default UpdateProfileInformation;
