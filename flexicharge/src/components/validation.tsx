import { useState } from 'react';
import AuthService from './AuthService';


const initialFormValues = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyCode: "",
    formSubmitted: false,
}


export const ValidationForm = () => {
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({} as any);
    const [msg, setMsg] = useState("");
    const [redirect, setRedirect] = useState(false);






    const validate: any = (fieldValues = values) => {
        // this function will check if the form values are valid
        const temp: any = { ...errors }
        
        if ("firstName" in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ("userName" in fieldValues)
            temp.userName = fieldValues.userName ? "" : "This field is required."

        if ("lastName" in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."

        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required."
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                    ? ""
                    : "Email is not valid."
        }

        if ("password" in fieldValues) {
            temp.password = fieldValues.password ? "" : "This field is required."
            if (fieldValues.password)
                temp.password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(fieldValues.password)
                    ? ""
                    : "Password must meet the requirements."
        }


        setErrors({
            ...temp
        });
    }
    const handleInputValue = (e: any) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        validate({ [name]: value });
    }

    const formIsValid = (fieldValues = values) => {
        // this function will check if the form values and return a boolean value
        const isValid =
            fieldValues.firstName &&
            fieldValues.userName &&
            fieldValues.lastName &&
            fieldValues.email &&
            fieldValues.password &&
            Object.values(errors).every((x) => x === "");
        return isValid;
    }
    const loginformIsValid = (fieldValues = values) => {
        // this function will check if the form values and return a boolean value
        const isValid =

            fieldValues.email &&
            fieldValues.password &&
            Object.values(errors).every((x) => x === "");

        return isValid;
    }

    const RegisterhandleFormSubmit = async (e: any) => {

        // this function will be triggered by the submit event

        e.preventDefault();

        const isValid = Object.values(errors).every((x) => x === "") && formIsValid();

        if (isValid) {
            const { userName, firstName, lastName, email, password } = values
            setRedirect(true)
            AuthService.register(
                firstName,
                lastName,
                userName,
                email,
                password
            ).then(
                response => {
                    setMsg(response.data.message)
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMsg(resMessage)
                }
            );
        }

    }

    const LogInhandleFormSubmit = async (e: any) => {
        // this function will be triggered by the submit event

        e.preventDefault();

        const isValid = Object.values(errors).every((x) => x === "") && loginformIsValid();

        if (isValid) {
            const { email, password } = values

            await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
        }
    }

  

    return {
        values,
        errors,
        handleInputValue,
        loginformIsValid,
        RegisterhandleFormSubmit,
        LogInhandleFormSubmit,
        formIsValid,
        msg,
        redirect
    };
}