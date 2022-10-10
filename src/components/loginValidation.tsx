import {useState } from "react";
import AuthService from "./AuthService";

const initialFormValues = {
  username: "",
  password: "",
};

export const ValidationForm = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [redirect, setRedirect] = useState(false);

  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    temp = checkLogin(fieldValues)

    setErrors({
      ...temp,
    });
  };
  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
    validate({ [name]: value });
  };

  const isEmpty = (initialValues: Object) => {
    var missingValues = [];
    for (const [key, value] of Object.entries(initialValues)) {
      if (value.length < 1) {
        missingValues.push("missing");
      }
    }
    return missingValues.length ? true : false;
  };
  const LogInhandleFormSubmit = async (e: any) => {
    e.preventDefault();

    const { username, password } = e.target.elements;
    const initialValues = {
      username: username.value,
      password: password.value,
    };
    const isValid = Object.values(errors).every((x) => x === "");

    if (isValid && !isEmpty(initialValues)) {
      setOpen(true);
      const { username, password } = values;
      AuthService.login(username, password).then(
        () => {
          handleClose;
          setOpen(false);
          setRedirect(true);
        },
        (error) => {
          console.log(error);
          setOpen(false);
          handleClose;
          setMsg(error.response.data.message);
        }
      );
    } else setMsg("Please fill in the fields!");
  };
  return {
    LogInhandleFormSubmit,
    handleInputValue,
    redirect,
    errors,
    msg,
    open,
    handleClose,
    validate,
  };
};

export const checkLogin = (fieldValues:any) =>{
  let temp = {
    username: "",
    password: "",
  };

  if ("username" in fieldValues) {
    temp.username = fieldValues.username ? "" : "This field is required.";
    if (fieldValues.username) {
      temp.username = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.username)
        ? ""
        : "Email is not valid.";
    }
  }

  if ("password" in fieldValues){
    temp.password = fieldValues.password ? "" : "This field is required.";
  }

  return temp
  
}