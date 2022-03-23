import { Avatar, Box, Container, Divider, FormControl, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import PrimaryButton from '../../../StyledComponent/Buttons/PrimaryButton';

const UserProfile = () => {
    const { registerUser, user } = useAuth({})
    // console.log(user)
    const [updateData, setUpdateData] = useState({})
    // const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newUpdateData = { ...updateData };
        newUpdateData[field] = value;
        setUpdateData(newUpdateData);
        console.log(newUpdateData);
    }
    const updateUser = (updateData) => {
        const user = { updateData };
        // console.log(updateData);
        // const details = updateData.details;
        // const name = updateData.name
        fetch(`https://salty-beach-45243.herokuapp.com/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then()

        registerUser(updateData.email, updateData.password, updateData.detail);
    }

    // console.log(user);
    return (
        <div>
            <Box>
                <Container fixed sx={ {
                    height: '100%',
                    py: 5,
                } }>

                    <Typography variant="h3" gutterBottom component="div">
                        My Profile
                        {/* <hr /> */ }
                        <Divider />
                    </Typography>
                    <Grid item container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } } sx={ {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    } }>
                        <Grid item xs={ 5 } >
                            <Avatar alt="Remy Sharp" src={ user?.photoURL } sx={ {
                                height: '150px',
                                width: '150px',
                                marginBottom: '50px'
                            } } />

                        </Grid>
                        <Grid item xs={ 7 }>
                            {/* <h1>2</h1> */ }
                            <FormControl sx={ { width: '100%' } } >
                                <label htmlFor="about">Short Brefing about:</label>
                                <textarea style={ {
                                    width: '100%',
                                    color: "success",
                                    name: "details"
                                } }
                                    name="details"
                                    defaultValue={ user.details || '' }
                                    onChange={ handleOnChange }
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="userid"
                                    label='UserId'
                                    defaultValue={ user.uid || '' }
                                    name="userid"
                                    type="text"
                                    color="success"
                                    disabled={ true }
                                    onChange={ handleOnChange }
                                    autoComplete="name"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="fullname"
                                    label="Full Name"
                                    name="name"
                                    type="name"
                                    color="success"
                                    defaultValue={ user.displayName || '' }
                                    onChange={ handleOnChange }
                                    autoComplete="name"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Email"
                                    label="Email Address"
                                    name="name"
                                    type="email"
                                    color="success"
                                    defaultValue={ user.email || '' }
                                    disabled
                                    onChange={ handleOnChange }
                                    autoComplete="name"
                                    autoFocus
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    color="success"
                                    onChange={ handleOnChange }
                                    autoComplete="password"
                                    autoFocus
                                />

                                <PrimaryButton type="submit" onClick={ updateUser }>Edit Profile</PrimaryButton>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div >
    );
};

export default UserProfile;