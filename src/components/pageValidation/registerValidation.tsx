import { useState } from "react";
import AuthService from "../AuthService";

const initialFormValues = {
  username: "",
  newPassword: "",
  confirmPassword: "",
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

    temp = checkRegisterValidation(fieldValues)
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

  const RegisterhandleFormSubmit = async (e: any) => {
    e.preventDefault();
    setMsg("");

    const { username, newPassword, confirmPassword } =
      e.target.elements;

    const initialValues = {
      username: username.value,
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value
    };

    const isValid = Object.values(errors).every((x) => x === "");
    if (!isEmpty(initialValues)) {
      if (isValid) {
        setOpen(true);
        const { username, newPassword, confirmPassword } = values;
        AuthService.register(
          username,
          newPassword,
          confirmPassword
        ).then(
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
      }
    } else {
      setMsg("Please fill in the fields!");
    }
  };

  return {
    values,
    errors,
    msg,
    open,
    handleClose,
    handleOpen,
    handleInputValue,
    RegisterhandleFormSubmit,
    redirect,
  
  };
};

export const checkRegisterValidation = (fieldValues:any) =>{
    let temp = {
        username: "",
        newPassword: "",
        confirmPassword: "",
    };
  
    let newPass = ""
    let confirmPass = ""
    //const [newPass, setNewPass] = useState("");
    if ("username" in fieldValues) {
        temp.username = fieldValues.username ? "" : "This field is required.";
        if (fieldValues.username) {
            temp.username = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(fieldValues.username)
            ? ""
            : "Email is not valid.";
        }
    }
  
    if ("newPassword" in fieldValues) {
        temp.newPassword = fieldValues.newPassword
            ? ""
            : "This field is required.";

        if (fieldValues.newPassword) {
            temp.newPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-!$%^&*"'()_+|~=`{}[\]:\\/;<>?,.@#]).{8,}/.test(fieldValues.newPassword)
            ? ""
            : "Password must at least have 8 characters including a number, a symbol and both lowercase and uppercase letter.";
        }
        newPass = fieldValues.newPassword
    }

    if ("confirmPassword" in fieldValues) {
        temp.confirmPassword = fieldValues.confirmPassword
            ? ""
            : "This field is required."

        newPass === "hej" ? temp.confirmPassword = "" : temp.confirmPassword = "Passwords don't match.";

    }
  
    return temp
    
  }