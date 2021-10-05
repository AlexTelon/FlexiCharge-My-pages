import { Password } from "@mui/icons-material";
import { useState } from "react";
import AuthService from "./AuthService";

const initialFormValues = {
	firstName: "",
	lastName: "",
	username: "",
	email: "",
	newPassword: "",
	password: "",
	verifyCode: "",
	formSubmitted: false,
};

export const ValidationForm = () => {
	const [values, setValues] = useState(initialFormValues);
	const [errors, setErrors] = useState({} as any);
	const [msg, setMsg] = useState("");
	const [redirect, setRedirect] = useState(false);

	const validate: any = (fieldValues = values) => {
		// this function will check if the form values are valid
		const temp: any = { ...errors };

		if ("firstName" in fieldValues)
			temp.firstName = fieldValues.firstName ? "" : "This field is required.";

		if ("lastName" in fieldValues)
			temp.lastName = fieldValues.lastName ? "" : "This field is required.";

		if ("username" in fieldValues) {
			temp.username = fieldValues.username ? "" : "This field is required.";
		}

		if ("email" in fieldValues) {
			temp.email = fieldValues.email ? "" : "This field is required.";
			if (fieldValues.email) {
				temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
					? ""
					: "Email is not valid.";
			}
		}

		if ("newPassword" in fieldValues) {
			temp.newPassword = fieldValues.newPassword
				? ""
				: "This field is required.";
			if (fieldValues.newPassword) {
				temp.newPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(
					fieldValues.newPassword
				)
					? ""
					: "Password must at least have 8 characters including a number and both lowercase and uppercase letter.";
			}
		}

		if ("password" in fieldValues)
			temp.password = fieldValues.password ? "" : "This field is required.";

		if ("verifyCode" in fieldValues) {
			temp.verifyCode = fieldValues.verifyCode
				? ""
				: "Code is a 6 digit number that was sent to your email.";
		}

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

		const { firstName, lastName, email, username, newPassword } =
			e.target.elements;

		const initialValues = {
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			username: username.value,
			newPassword: newPassword.value,
		};

		const isValid = Object.values(errors).every((x) => x === "");
		if (!isEmpty(initialValues)) {
			if (isValid) {
				const { firstName, lastName, email, username, newPassword } = values;
				AuthService.register(
					firstName,
					lastName,
					email,
					username,
					newPassword
				).then(
					() => setRedirect(true),
					(error) => setMsg(error.response.data.message)
				);
			}
		} else {
			setMsg("Please fill in the fields!");
		}
	};

	const verifyHandleFormSubmit = async (e: any) => {
		e.preventDefault();

		const { username, verifyCode } = e.target.elements;
		const initialValues = {
			username: username.value,
			verifyCode: verifyCode.value,
		};

		const isValid = Object.values(errors).every((x) => x === "");

		if (isValid && !isEmpty(initialValues)) {
			const { username, verifyCode } = values;
			AuthService.verify(username, verifyCode).then(
				() => setRedirect(true),
				(error) => setMsg(error.response.data.message)
			);
		} else setMsg("Please fill in the fields!");
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
			const { username, password } = values;
			AuthService.login(username, password).then(
				() => setRedirect(true),
				(error) => setMsg(error.response.data.message)
			);
		} else setMsg("Please fill in the fields!");
	};

	const ForgotPasswordHandleFormSubmit = async (e: any) => {
		e.preventDefault();

		const { username } = e.target.elements;
		const initialValues = {
			username: username.value,
		};

		const isValid = Object.values(errors).every((x) => x === "");

		if (isValid && !isEmpty(initialValues)) {
			const { username } = values;
			AuthService.forgotPassword(username).then(() => setRedirect(true));
		} else setMsg("Please fill in the fields!");
	};

	const ConfirmForgotPasswordHandleFormSubmit = async (e: any) => {
		e.preventDefault();
		setMsg("");

		const { username, newPassword, verifyCode } = e.target.elements;
		const initialValues = {
			username: username.value,
			newPassword: newPassword.value,
			verifyCode: verifyCode.value,
		};

		const isValid = Object.values(errors).every((x) => x === "");

		if (!isEmpty(initialValues)) {
			if (isValid) {
				const { username, newPassword, verifyCode } = values;
				AuthService.confirmForgotPassword(
					username,
					newPassword,
					verifyCode
				).then(
					(response) => {
						console.log("sucesss confirmsforgot", response);
						setRedirect(true);
					},
					(error) => {
						console.log(error.response, "error");
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
		handleInputValue,
		RegisterhandleFormSubmit,
		verifyHandleFormSubmit,
		LogInhandleFormSubmit,
		ForgotPasswordHandleFormSubmit,
		ConfirmForgotPasswordHandleFormSubmit,
		redirect,
	};
};
