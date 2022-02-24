import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ManagePackage.css'

const ManagePackage = () => {
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
                        <h3 className='mb-5 heading-main text-light'>Add a Package</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='col-12 d-md-flex'>
                                <div className='w-100 '>
                                    <label htmlFor='name' className='mb-2'>
                                        Package Title
                                    </label>
                                    <input
                                        required
                                        placeholder='Package Name'
                                        {...register('name')}
                                    />
                                </div>

                                <div className='w-100 ps-0 ps-md-3'>
                                    <label htmlFor='price' className='mb-2'>
                                        Price
                                    </label>
                                    <input
                                        required
                                        placeholder='Enter price'
                                        {...register('price')}
                                    />
                                </div>
                            </div>
                            <div className='col-12 '>
                                <div className='w-100 '>
                                    <label htmlFor='image' className='mb-2'>
                                        Image
                                    </label>
                                    <input required placeholder='Image Url' {...register('img')} />
                                </div>
                                <div className='w-100 '></div>
                                <div className='w-100 '>
                                    <label htmlFor='image' className='mb-2'>
                                        Total persion
                                    </label>
                                    <input
                                        required
                                        placeholder='Persion'
                                        {...register('stock')}
                                    />
                                </div>
                                <div class="w-100 form-outline datepicker">
                                    <label for="exampleDatepicker1" class="form-label">Select a date</label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        id="exampleDatepicker1"
                                    />
                                </div>
                                <div className='w-100 '>
                                    <label htmlFor='description' className='mb-2'>
                                        Description
                                    </label>
                                    <textarea
                                        className='bg-white'
                                        rows='4'
                                        placeholder='Short description'
                                        {...register('description', { required: true })}
                                    />
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btn text-light'
                                style={{ marginLeft: `calc(100% - 115px)`, background: '#FF257B', color: 'white' }}
                            >
                                Submit
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

export default ManagePackage;