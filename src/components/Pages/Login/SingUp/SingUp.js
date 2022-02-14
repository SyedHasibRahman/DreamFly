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
import { Alert, Container } from '@mui/material';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import LinearProgress from '@mui/material/LinearProgress';

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


export default function SignUp() {
    const { registerUser, isLoading, user, authError } = useAuth({})
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }
    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did not match');
            return;
        }
        registerUser(loginData.email, loginData.password);


    };

    return (
        <ThemeProvider theme={ theme }>
            <Container>
                { isLoading && <LinearProgress /> }
                <Grid container component="main" sx={ { py: 5 } }>
                    <Grid
                        item
                        xs={ false }
                        sm={ 4 }
                        md={ 7 }
                        sx={ {
                            backgroundImage: 'url(https://i.ibb.co/K9qTyrg/undraw-journey-lwlj.png)',
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
                                Sign Up
                            </Typography>
                            { user?.email && <Alert severity="success">User successfully Created </Alert> }
                            {
                                authError && <Alert severity="error">{ authError }</Alert>
                            }
                            <Box component="form" noValidate onSubmit={ handleSignUpSubmit } sx={ { mt: 1 } }>

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="fullname"
                                    label="Full Name"
                                    name="name"
                                    type="name"
                                    onChange={ handleOnChange }
                                    autoComplete="name"
                                    autoFocus
                                />
                                {/* <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="lastname"
                                    label="Last Name"
                                    name="name2"
                                    onChange={ handleOnChange }
                                    autoComplete="name"
                                    autoFocus
                                /> */}
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
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password2"
                                    type="password"
                                    onChange={ handleOnChange }
                                    label="Password"
                                    id="password2"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={ <Checkbox value="remember" color="primary" /> }
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={ { mt: 3, mb: 2 } }
                                >
                                    Sign Up
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <Link href="/SignIn" variant="body2">
                                            Already have an account? Sign in
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