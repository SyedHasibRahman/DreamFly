import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ManageFlight.css'

const ManageFlight = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState();
    const onSubmit = (data) => {
        fetch('https://intense-plateau-36885.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setSuccess(true);
                    reset();
                    setTimeout(() => {
                        setSuccess(false);
                    }, 5000);
                }
            });
    };
    return (
        <Container>
            <div className='row  d-flex justify-content-center mt-5'>
                <div className='col-12 col-md-10 col-lg-9 mid '>
                    <div className='add-product box-shadow bg-white p-4 packageDiv'>
                        <h3 className='mb-5 heading-main text-light'>Add a Flight</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='col-12 d-md-flex'>
                                <div className='w-100 '>
                                    <label htmlhtmlFor='name' className='mb-2'>
                                        From
                                    </label>
                                    <input
                                        required
                                        placeholder='From'
                                        {...register('from')}
                                    />
                                </div>
                                <div className='w-100 ps-0 ps-md-3'>
                                    <label htmlhtmlFor='name' className='mb-2'>
                                        To
                                    </label>
                                    <input
                                        required
                                        placeholder='To'
                                        {...register('to')}
                                    />
                                </div>

                                <div className='w-100 ps-0 ps-md-3'>
                                    <label htmlhtmlFor='price' className='mb-2'>
                                        Price
                                    </label>
                                    <input
                                        required
                                        placeholder='Enter price'
                                        {...register('price')}
                                    />
                                </div>
                                <div className='w-100 ps-0 ps-md-3'>
                                    <label htmlhtmlFor='price' className='mb-2'>
                                        Passenger
                                    </label>
                                    <input
                                        required
                                        placeholder='Passenger'
                                        {...register('passenger')}
                                    />
                                </div>
                            </div>
                            <div className='col-12 '>
                                <div className="w-100 form-outline datepicker">
                                    <label htmlFor="exampleDatepicker1" className="form-label">Select a date</label>
                                    <input
                                        type="date"
                                        required
                                        className="form-control"
                                        id="exampleDatepicker1"
                                        {...register('date')}
                                    />
                                </div>

                            </div>
                            <button
                                type='submit'
                                className='btn text-light'
                                style={{ marginLeft: `calc(100% - 115px)`, background: '#FF257B', color: 'white' }}
                            >
                                Add
                            </button>
                            {success && (
                                <Alert variant='success' className='mt-2 py-2'>
                                    packages added successfully
                                </Alert>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default ManageFlight;