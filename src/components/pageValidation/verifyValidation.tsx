import { useState } from "react";
import AuthService from "../AuthService";

const initialFormValues = {
  username: "",
  verifyCode: "",
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
    
    temp = checkVerifyValidation(fieldValues)

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

  const verifyHandleFormSubmit = async (e: any) => {
    e.preventDefault();

    const { verifyCode } = e.target.elements;
    const initialValues = {
      verifyCode: verifyCode.value,
    };

    const isValid = Object.values(errors).every((x) => x === "");

    if (isValid && !isEmpty(initialValues)) {
      setOpen(true);
      const { username, verifyCode } = values;
      AuthService.verify(username, verifyCode).then(
        () => {
          handleClose;
          setOpen(false);
          setRedirect(true);
        },
        (error) => {
          handleClose;
          setOpen(false);
          setMsg(error.response.data.message);
        }
      );
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
    verifyHandleFormSubmit,
    redirect,
  
  };
};

export const checkVerifyValidation = (fieldValues:any) =>{
    let temp = {
        username: "",
        verifyCode: "",
    };
  
    if ("username" in fieldValues) {
        temp.username = fieldValues.username ? "" : "This field is required.";
        if (fieldValues.username) {
          temp.username = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(fieldValues.username)
            ? ""
            : "Email is not valid.";
        }
      }
  
      if ("verifyCode" in fieldValues) {
        temp.verifyCode = fieldValues.verifyCode
          ? ""
          : "Code is a 6 digit number that was sent to your email.";
      }
  
    return temp
    
}