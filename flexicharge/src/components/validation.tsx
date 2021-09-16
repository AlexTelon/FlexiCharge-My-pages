import { useState } from 'react';
import { Redirect } from 'react-router';

const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    formSubmitted: false,
    success: false
}


export const ValidationForm = () => {
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({} as any);
    const [redirect, setRedirect] = useState(false);

    const validate: any = (fieldValues = values) => {
        // this function will check if the form values are valid
        let temp: any = { ...errors }

        if ("firstName" in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."

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
            fieldValues.lastName &&
            fieldValues.email &&
            fieldValues.password &&
            Object.values(errors).every((x) => x === "");

        return isValid;
    }

    const handleFormSubmit = async (e: any) => {
        // this function will be triggered by the submit event

        e.preventDefault();

        const isValid = Object.values(errors).every((x) => x === "") && formIsValid();
        
        if (isValid) {
            const { firstName, lastName, email, password} = values
            
            await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                })
            });
            setRedirect(true)
        }
        if (redirect) {
            return <Redirect to="/login"/>
        }

    }

    return {
        values,
        errors,
        handleInputValue,
        handleFormSubmit,
        formIsValid,
    };
}