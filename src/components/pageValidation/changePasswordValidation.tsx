import {useState } from "react";
import AuthService from "../AuthService";

const initialFormValues = {
  newPassword: "",
  confirmPassword: "",
  password: "",
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

    temp = checkChangePassword(fieldValues)

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

  const ChangePassword = async (e: any) => {
    e.preventDefault();
    setMsg("");

    const { password, newPassword, confirmPassword } = e.target.elements;
    const initialValues = {
      password: password.value,
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value
    };

    const isValid = Object.values(errors).every((x) => x === "");
    const user = AuthService.getCurrentUser();
    const token = user.accessToken;
    if (!isEmpty(initialValues)) {
      if (isValid) {
        const { password, newPassword, confirmPassword } = values;

        AuthService.changePassword(token, password, newPassword, confirmPassword).then(
          (response) => {
            setRedirect(true);
          },
          (error) => {
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
    ChangePassword,
    handleClose,
    handleOpen,
    handleInputValue,
    redirect,
  
  };
};

export const checkChangePassword = (fieldValues:any) =>{
    let temp = {
        newPassword: "",
        confirmPassword: "",
        password: "",
    };

    let newPass=""
    if ("newPassword" in fieldValues) {
        temp.newPassword = fieldValues.newPassword
          ? ""
          : "This field is required.";
  
        if (fieldValues.newPassword) {
          temp.newPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-!$%^&*"'()_+|~=`{}[\]:\\/;<>?,.@#]).{8,}/.test(fieldValues.newPassword)
            ? ""
            : "Password must at least have 8 characters including a number, a symbol and both lowercase and uppercase letter.";
        }
        newPass = (fieldValues.newPassword)
    }
  
    if ("confirmPassword" in fieldValues) {
        temp.confirmPassword = fieldValues.confirmPassword
        ? ""
        : "This field is required."

        newPass === fieldValues.confirmPassword ? temp.confirmPassword = "" : temp.confirmPassword = "Passwords don't match.";
    }
  
    if ("password" in fieldValues)
        temp.password = fieldValues.password ? "" : "This field is required.";

    return temp
    
}