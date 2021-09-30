import { Button, TextField, Box, Container } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ValidationForm } from '../components/validation';
import {Redirect} from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';



const inputFieldValues = [
    {
        name: "userName",
        label: "User Name",
        id: "user-first-name",
        icon: <AccountCircle />
    },
    {
        name: "password",
        type: "password",
        label: "Password",
        id: "user-password",
        icon: <LockIcon />
    }
];
const Login = () => {
    
        const{
            handleInputValue, 
            LogInhandleFormSubmit,
            loginformIsValid,
            errors,
            msg,
            redirect
    
        }= ValidationForm();
        if (!msg && redirect) {
            return <Redirect to="/"/>;
        }
       
    
        return (
            <Container className="form-container" component="main" maxWidth="xs">
                <h2>
                    Log In
                </h2>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <form autoComplete="off" onSubmit={LogInhandleFormSubmit}>
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
                        <Button
                            variant="contained"
                            type="submit"
                            className="loginButton"
                            disabled={!loginformIsValid()}
                        >
                        </Button>
                        <Box color="red">{msg}</Box>

                    </form>
                </Box>
            </Container>
           
        );
    };
    
    export default Login;
    
