import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Alert } from '@mui/material';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import LinearProgress from '@mui/material/LinearProgress';
import { useLocation, useNavigate } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" { ...props }>
            { 'Copyright © ' }
            <Link color="inherit" href="https://mui.com/">
                DreamFly
            </Link>{ ' ' }
            { new Date().getFullYear() }
            { '.' }
        </Typography>
    );
}

const theme = createTheme();

export default function SignInSide() {
    const [loginData, setLoginData] = useState({});
    const { user, logInUser, isLoading, authError, signInWithGoogle } = useAuth({});

    const location = useLocation();
    const navigate = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleSignInSubmit = (event) => {
        event.preventDefault();
        logInUser(loginData.email, loginData.password, location, navigate);
        alert('Login Successful');
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    return (
        <ThemeProvider theme={ theme } >
            <Container>
                { isLoading && <LinearProgress /> }
                <Grid container component="main" sx={ { py: 5 } }>
                    <Grid
                        item
                        xs={ false }
                        sm={ 4 }
                        md={ 7 }
                        sx={ {
                            backgroundImage: 'url(https://i.ibb.co/HG4dLcL/undraw-Airport-re-oqk1.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        } }
                    />
                    <Grid item xs={ 12 } sm={ 8 } md={ 5 } component={ Paper } elevation={ 6 } square>
                        <Box
                            sx={ {
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            } }
                        >
                            <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign In
                            </Typography>
                            {/* Form Start here */ }
                            { user?.email && <Alert severity="success">User Login Successfull </Alert> }
                            {
                                authError && <Alert severity="error">{ authError }</Alert>
                            }
                            <Box component="form" noValidate onSubmit={ handleSignInSubmit } sx={ { mt: 1 } }>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    onChange={ handleOnChange }
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    type="password"
                                    onChange={ handleOnChange }
                                    label="Password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={ <Checkbox value="remember" color="primary" /> }
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={ { mt: 3, mb: 2 } }
                                >
                                    Sign In
                                </Button>
                                <Button onClick={ handleGoogleSignIn }
                                    fullWidth variant="contained"
                                    sx={ { my: 1 } } > Sign In Using Google</Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/SignUp" variant="body2">
                                            Don't have an account? Sign Up
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={ { mt: 5 } } />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}