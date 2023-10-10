import { useState } from 'react';
import AuthService from '../../components/AuthService';

const initialFormValues = {
  firstName: '',
  lastName: '',
  streetAddress: '',
  phoneNumber: '',
  username: '',
  email: '',
  zipCode: '',
  city: '',
  country: '',
  newPassword: '',
  confirmPassword: '',
  password: '',
  verifyCode: '',
  formSubmitted: false
};

export const ValidationForm = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);
  const [msg, setMsg] = useState('');
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [redirect, setRedirect] = useState(false);
  const minimumLetters = 2;
  const [newPass, setNewPass] = useState('');

  const validate: any = (fieldValues = values) => {
    const temp: any = { ...errors };

    if ('firstName' in fieldValues) {
      temp.firstName = fieldValues.firstName ? '' : 'This field is required.';

      if (fieldValues.firstName) {
        temp.firstName = /^([A-ZÅÄÖa-zåäö]{2,})*$/.test(fieldValues.firstName)
          ? ''
          : `May only contain letters and a minimum of ${minimumLetters} letters.`;
      }
    }

    if ('lastName' in fieldValues) {
      temp.lastName = fieldValues.lastName ? '' : 'This field is required.';

      if (fieldValues.lastName) {
        temp.lastName = /^([A-ZÅÄÖa-zåäö]{2,})*$/.test(fieldValues.lastName)
          ? ''
          : `May only contain letters and a minimum of ${minimumLetters} letters.`;
      }
    }

    if ('username' in fieldValues) {
      temp.username = fieldValues.username ? '' : 'This field is required.';
      if (fieldValues.username) {
        temp.username = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          fieldValues.username
        )
          ? ''
          : 'Email is not valid.';
      }
    }
    if ('streetAddress' in fieldValues) {
      temp.streetAddress = fieldValues.streetAddress
        ? ''
        : 'This field is required.';
      if (fieldValues.streetAddress) {
        temp.streetAddress = /(?=.*[a-zåäöA-ZÅÄÖ ]{2,})*(?=.*[0-9 ]{1,})/.test(
          fieldValues.streetAddress
        )
          ? ''
          : 'Address is not valid.';
      }
    }

    if ('phoneNumber' in fieldValues) {
      temp.phoneNumber = fieldValues.phoneNumber
        ? ''
        : 'This field is required.';
      if (fieldValues.phoneNumber) {
        temp.phoneNumber = /^[0-9]+$/.test(fieldValues.phoneNumber)
          ? ''
          : 'May only contain numbers.';
      }
    }

    if ('newPassword' in fieldValues) {
      temp.newPassword = fieldValues.newPassword
        ? ''
        : 'This field is required.';

      if (fieldValues.newPassword) {
        temp.newPassword =
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-!$%^&*"'()_+|~=`{}[\]:\\/;<>?,.@#]).{8,}/.test(
            fieldValues.newPassword
          )
            ? ''
            : 'Password must at least have 8 characters including a number, a symbol and both lowercase and uppercase letter.';
      }
      setNewPass(fieldValues.newPassword);
    }

    if ('confirmPassword' in fieldValues) {
      temp.confirmPassword = fieldValues.confirmPassword
        ? ''
        : 'This field is required.';

      newPass === fieldValues.confirmPassword
        ? (temp.confirmPassword = '')
        : (temp.confirmPassword = "Passwords don't match.");
    }

    if ('password' in fieldValues) { temp.password = fieldValues.password ? '' : 'This field is required.'; }

    if ('verifyCode' in fieldValues) {
      temp.verifyCode = fieldValues.verifyCode
        ? ''
        : 'Code is a 6 digit number that was sent to your email.';
    }

    setErrors({
      ...temp
    });
  };

  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };

  const isEmpty = (initialValues: Object) => {
    const missingValues = [];
    for (const [key, value] of Object.entries(initialValues)) {
      if (value.length < 1) {
        missingValues.push('missing');
      }
    }
    return !!missingValues.length;
  };

  const RegisterhandleFormSubmit = async (e: any) => {
    e.preventDefault();
    setMsg('');
    const {
      firstName,
      lastName,
      email,
      streetAddress,
      phoneNumber,
      username,
      newPassword,
      confirmPassword
    } = e.target.elements;

    const initialValues = {
      username: username.value,
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value
    };

    const isValid = Object.values(errors).every((x) => x === '');
    if (!isEmpty(initialValues)) {
      if (isValid) {
        setOpen(true);
        const {
          firstName,
          lastName,
          email,
          streetAddress,
          phoneNumber,
          username,
          newPassword,
          confirmPassword
        } = values;
        AuthService.register(username, newPassword, confirmPassword).then(
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
      setMsg('Please fill in the fields!');
    }
  };

  const ConfirmForgotPasswordHandleFormSubmit = async (e: any) => {
    e.preventDefault();
    setMsg('');

    const { username, newPassword, confirmPassword, verifyCode } =
      e.target.elements;
    const initialValues = {
      username: username.value,
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value,
      verifyCode: verifyCode.value
    };

    const isValid = Object.values(errors).every((x) => x === '');

    if (!isEmpty(initialValues)) {
      if (isValid) {
        setOpen(true);
        const { username, newPassword, confirmPassword, verifyCode } = values;
        AuthService.confirmForgotPassword(
          username,
          newPassword,
          confirmPassword,
          verifyCode
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
      setMsg('Please fill in the fields!');
    }
  };

  const ChangePassword = async (e: any) => {
    e.preventDefault();
    setMsg('');

    const { password, newPassword, confirmPassword } = e.target.elements;
    const initialValues = {
      password: password.value,
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value
    };

    const isValid = Object.values(errors).every((x) => x === '');
    const user = AuthService.getCurrentUser();
    const token = user.accessToken;
    if (!isEmpty(initialValues)) {
      if (isValid) {
        const { password, newPassword, confirmPassword } = values;

        AuthService.changePassword(
          token,
          password,
          newPassword,
          confirmPassword
        ).then(
          (response) => {
            setRedirect(true);
          },
          (error) => {
            setMsg(error.response.data.message);
          }
        );
      }
    } else {
      setMsg('Please fill in the fields!');
    }
  };

  const GetUpdatedUserProfile = async (e: any) => {
    e.preventDefault();
    setMsg('');

    const {
      username,
      firstName,
      lastName,
      phoneNumber,
      streetAddress,
      zipCode,
      city,
      country
    } = e.target.elements;

    const initialValues = {
      firstName,
      lastName,
      phoneNumber,
      streetAddress,
      zipCode,
      city,
      country
    };

    const isValid = Object.values(errors).every((x) => x === '');
    if (!isEmpty(initialValues)) {
      if (isValid) {
        AuthService.getUpdatedUserProfile();
      }
    } else {
      console.log('error');
      setMsg('Please fill in the fields!');
    }
  };

  const UpdateUserProfile = async (e: any) => {
    e.preventDefault();
    setMsg('');

    const {
      newFirstName,
      newLastName,
      newPhoneNumber,
      newStreetAddress,
      newZipCode,
      newCity,
      newCountry
    } = e.target.elements;

    const initialValues = {
      firstName: newFirstName.value,
      lastName: newLastName.value,
      phoneNumber: newPhoneNumber.value,
      streetAddress: newStreetAddress.value,
      zipCode: newZipCode.value,
      city: newCity.value,
      country: newCountry.value
    };

    const isValid = Object.values(errors).every((x) => x === '');

    if (!isEmpty(initialValues)) {
      if (isValid) {
        const {
          firstName,
          lastName,
          phoneNumber,
          streetAddress,
          zipCode,
          city,
          country
        } = values;

        AuthService.updateUserProfile(
          firstName,
          lastName,
          phoneNumber,
          streetAddress,
          zipCode,
          city,
          country
        );
      }
    } else {
      setMsg('Please fill in the fields!');
    }
  };

  return {
    values,
    errors,
    msg,
    open,
    GetUpdatedUserProfile,
    ChangePassword,
    UpdateUserProfile,
    handleClose,
    handleOpen,
    handleInputValue,
    RegisterhandleFormSubmit,
    ConfirmForgotPasswordHandleFormSubmit,
    redirect
  };
};

export default ValidationForm;