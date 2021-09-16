import  { SyntheticEvent, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button, TextField, Grid, Box, Container } from '@material-ui/core'
import AccountCircle  from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';


const Login = (props: { setName: (name: string) => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();
        if (!(content.message.includes('Invalid'))) {
            setRedirect(true)
            props.setName(content.name)
        }else
            alert("Incorrect username or password")
    }

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <Container className="form-container" component="main" maxWidth="xs">
            <h2>
                Log in  
            </h2>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <form onSubmit={submit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                        }}
                        onChange={e => setEmail(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LockIcon />
                              </InputAdornment>
                            ),
                        }}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        className="loginButton"
                        variant="contained"
                    >   
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
