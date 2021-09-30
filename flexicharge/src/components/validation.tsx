import { useState } from "react";
import AuthService from "./AuthService";

const initialFormValues = {
	username: "",
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	code: "",
	formSubmitted: false,
};

export const ValidationForm = () => {
	const [values, setValues] = useState(initialFormValues);
	const [errors, setErrors] = useState({} as any);
	const [msg, setMsg] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleInputValue = (e: any) => {
		const { name, value } = e.target;

		setValues({
			...values,
			[name]: value,
		});
		validate({ [name]: value });
	};

	const handleInputValues = (e: any) => {
		const { name, value } = e.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	const validate: any = (fieldValues = values) => {
		// this function will check if the form values are valid
		const temp: any = { ...errors };

		if ("firstName" in fieldValues)
			temp.firstName = fieldValues.firstName ? "" : "This field is required.";

		if ("username" in fieldValues)
			temp.username = fieldValues.username ? "" : "This field is required.";

		if ("lastName" in fieldValues)
			temp.lastName = fieldValues.lastName ? "" : "This field is required.";

		if ("email" in fieldValues) {
			temp.email = fieldValues.email ? "" : "This field is required.";
			if (fieldValues.email)
				temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
					? ""
					: "Email is not valid.";
		}

		if ("password" in fieldValues) {
			temp.password = fieldValues.password ? "" : "This field is required.";
			if (fieldValues.password)
				temp.password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(
					fieldValues.password
				)
					? ""
					: "Password must meet the requirements.";
		}

		setErrors({
			...temp,
		});
	};

	const formIsValid = (fieldValues = values) => {
		// this function will check if the form values and return a boolean value
		const isValid =
			fieldValues.firstName &&
			fieldValues.username &&
			fieldValues.lastName &&
			fieldValues.email &&
			fieldValues.password &&
			Object.values(errors).every((x) => x === "");
		return isValid;
	};

	const RegisterhandleFormSubmit = async (e: any) => {
		// this function will be triggered by the submit event

		e.preventDefault();
		const isValid =
			Object.values(errors).every((x) => x === "") && formIsValid();

		if (isValid) {
			const { username, firstName, lastName, email, password } = values;
			AuthService.register(firstName, lastName, username, email, password).then(
				(response) => {
					console.log(response, "success");
					setRedirect(true);
				},
				(error) => {
					console.log(error, "errrrrrrrrrrrrrrrrr");

					const resMessage =
						(error.response &&
							error.response.data &&
							error.response.data.message) ||
						error.message ||
						error.toString();
					setMsg(resMessage);
				}
			);
		}
	};

	const verifyHandleFormSubmit = async (
		e: any,
		username: string,
		code: any
	) => {
		e.preventDefault();

		const codeVerify = code.join("");
		AuthService.verify(username, codeVerify).then(
			(response) => {
				setRedirect(true);
			},
			(error) => {
				const resMessage =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();
				setMsg(resMessage);
			}
		);
	};

	const LoginHandleFormSubmit = async (e: any) => {
		// this function will be triggered by the submit event

		e.preventDefault();
		console.log("here");

		const { username, password } = values;

		AuthService.login(username, password).then(
			(response) => {
				setRedirect(true);
			},
			(error) => {
				const resMessage =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();
				setMsg(resMessage);
			}
		);
	};

	const ForgotPasswordHandleFormSubmit = async (e: any) => {
		// this function will be triggered by the submit event

		e.preventDefault();
		console.log("forgotpassword");

		const { username } = values;

		AuthService.forgotPassword(username).then(
			(response) => {
				console.log("success");
				setRedirect(true);
			},
			(error) => {
				console.log("error");

				const resMessage =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();
				setMsg(resMessage);
			}
		);
	};

	return {
		values,
		errors,
		msg,
		handleInputValue,
		formIsValid,
		RegisterhandleFormSubmit,
		verifyHandleFormSubmit,
		LoginHandleFormSubmit,
		ForgotPasswordHandleFormSubmit,
		redirect,
	};
};
