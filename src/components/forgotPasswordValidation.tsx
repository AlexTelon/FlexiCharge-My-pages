import {useState } from "react";
import AuthService from "./AuthService";

const initialFormValues = {
  username: "",
};

export const ValidationForm = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [redirect, setRedirect] = useState(false);

  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    temp = checkForgotPassword(fieldValues)

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
  const ForgotPasswordHandleFormSubmit = async (e: any) => {
    e.preventDefault();

    const { username } = e.target.elements;
    const initialValues = {
      username: username.value,
    };

    const isValid = Object.values(errors).every((x) => x === "");

    if (isValid && !isEmpty(initialValues)) {
      setOpen(true);
      const { username } = values;
      AuthService.forgotPassword(username).then(() => {
        handleClose;
        setOpen(false);
        setRedirect(true);
      });
    } else setMsg("Please fill in the fields!");
  };

  return {
    values,
    errors,
    msg,
    open,
    handleClose,
    handleOpen,
    handleInputValue,
    ForgotPasswordHandleFormSubmit,
    redirect,
  
  };
};

export const checkForgotPassword = (fieldValues:any) =>{
    let temp = {
      username: "",
    };
  
    if ("username" in fieldValues) {
        temp.username = fieldValues.username ? "" : "This field is required.";
        if (fieldValues.username) {
            temp.username = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(fieldValues.username)
            ? ""
            : "Email is not valid.";
        }
    }
  
    return temp
    
}