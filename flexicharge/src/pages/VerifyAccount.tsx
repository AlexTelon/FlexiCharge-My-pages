import { Button, TextField, Box, Container } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';

const inputFieldValues = [
    {
        name: "email",
        label: "Email",
        id: "user-email",
        icon: <EmailIcon />
    },
    {
        name: "verifyCode",
        label: "Code for verification",
        id: "user-verify-password",
        icon: <LockIcon />
    }
];

const VerifyAccount = () => {


    return (
        <Container className="form-container" component="main" maxWidth="xs">
        <h2>
            Verification
        </h2>
             <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <form autoComplete="off">
                        {inputFieldValues.map((inputFieldValue, index) => {
                            return (
                                <TextField
                                    key={index}
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
                                    autoComplete="none"
                                />
                            );
                        })}
                        <Button
                            variant="contained"
                            type="submit"
                            className="verifyButton"
                        >
                            Verify
                        </Button>
                    </form>
                </Box>
            </Container>
    )
}

export default VerifyAccount
