import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState();
    const [error, setError] = useState(false);
    const { token } = useAuth();
    const onSubmit = (data) => {
        const email = data.email;
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    setSuccess(true);
                    setError(false);
                    reset();
                }
                if (data.modifiedCount === 0) {
                    setSuccess(false);
                    setError(true);
                    reset();
                }
            });
    };
    return (
        <Container>
            <Box className='row  d-flex justify-content-center'>
                <Box className='col-12 col-md-10 col-lg-9 '>
                    <Box className='box-shadow admin mainDiv p-4 '>
                        <h3 className='mb-5 heading-main text-light'>Make Admin</h3>
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <div className='col-12 d-md-flex'>
                                <div className='w-100 '>
                                    <label htmlhtmlFor='name' className='mb-2'>
                                        Enter email
                                    </label>
                                    <input
                                        required
                                        type='email'
                                        placeholder='Example@gmail.com'
                                        { ...register('email') }
                                    />
                                </div>
                            </div>
                            <button type='submit' className='btn' style={ { background: '#FF257B' } }>
                                Submit
                            </button>
                        </form>
                    </Box>
                    { success && (
                        <Alert variant='success' className='mt-2 py-2'>
                            Admin added successfully
                        </Alert>
                    ) }

                    { error && (
                        <Alert variant='danger' className='mt-2 py-2'>
                            Already Added
                        </Alert>
                    ) }
                </Box>
            </Box>
        </Container>
    );
};

export default MakeAdmin;