import { Button, TextField, Box, Container } from '@material-ui/core'
import { ValidationForm } from '../components/validation';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';

const inputFieldValues = [
    {
        name: "firstName",
        label: "First Name",
        id: "user-first-name",
        icon: <AccountCircle />
    },
    {
        name: "lastName",
        label: "Last Name",
        id: "user-Last-name",
        icon: <AccountCircle />
    },
    {
        name: "email",
        label: "Email",
        id: "user-email",
        icon: <EmailIcon />
    },
    {
        name: "password",
        type: "password",
        label: "Password",
        id: "user-password",
        icon: <LockIcon />
    }
];

const Register = () => {
    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = ValidationForm();

    return (
        <Container className="form-container" component="main" maxWidth="xs">
            <h2>
                Register
            </h2>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <form autoComplete="off" onSubmit={handleFormSubmit}>
                    {inputFieldValues.map((inputFieldValue, index) => {
                        return (
                            <TextField
                                key={index}
                                onChange={handleInputValue}
                                onBlur={handleInputValue}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {inputFieldValue.icon}
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                                style={{ marginTop: "10px" }}
                                name={inputFieldValue.name}
                                label={inputFieldValue.label}
                                type={inputFieldValue.type}
                                error={inputFieldValue.name ? false : true}
                                autoComplete="none"
                                {...(errors[inputFieldValue.name] && {
                                    error: true,
                                    helperText: errors[inputFieldValue.name]
                                })}
                            />
                        );
                    })}
                    <Box color="text.secondary">Password must at least have 8 characters including a number and both lowercase and uppercase letter.</Box>
                    <Button
                        variant="contained"
                        type="submit"
                        className="registerButton"
                        disabled={!formIsValid()}
                    >
                    </Button>
                </form>
            </Box>
        </Container>
    )
};

export default Register;
