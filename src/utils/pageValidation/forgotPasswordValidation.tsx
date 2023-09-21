import {useState } from "react";
import AuthService from "../../components/AuthService";
import { checkValidate, isEmpty } from "./checkValidate";

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

    temp = checkValidate(fieldValues)

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