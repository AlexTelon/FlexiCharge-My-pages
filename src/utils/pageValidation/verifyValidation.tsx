import { useState } from "react";
import AuthService from "../../components/AuthService";
import { checkValidate, isEmpty } from "./checkValidate";

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