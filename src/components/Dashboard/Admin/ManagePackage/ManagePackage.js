import { Container, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ManagePackage.css'

const ManagePackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/tourPackages', {
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

                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <div className='col-12 d-md-flex'>
                                <div className='w-100 '>
                                    <label htmlhtmlFor='name' className='mb-2'>
                                        Package Title
                                    </label>
                                    <input
                                        required
                                        placeholder='Package Name'
                                        { ...register('title') }
                                    />
                                </div>

                                <div className='w-100 ps-0 ps-md-3'>
                                    <label htmlhtmlFor='price' className='mb-2'>
                                        Price
                                    </label>
                                    <input
                                        required
                                        placeholder='Enter price'
                                        { ...register('price') }
                                    />
                                </div>
                            </div>
                            <div className='col-12 '>
                                <div className='w-100 '>
                                    <label htmlhtmlFor='image' className='mb-2'>
                                        Image
                                    </label>
                                    <input required placeholder='Image Url' { ...register('images') } />
                                </div>
                                <div className='w-100 '></div>
                                <div className='w-100 '>
                                    <label htmlhtmlFor='image' className='mb-2'>
                                        Total persion
                                    </label>
                                    <input
                                        required
                                        placeholder='Persion'
                                        { ...register('person') }
                                    />
                                </div>
                                <div className='w-100 '>
                                    <label htmlhtmlFor='image' className='mb-2'>
                                        Category
                                    </label>
                                    {/* <input
                                        required
                                        placeholder='Category'
                                        {...register('category')}
                                    /> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Age"
                                        { ...register('category') }
                                    >
                                        <MenuItem value={ 'General' }>General</MenuItem>
                                        <MenuItem value={ 'Packages' }>Packages</MenuItem>
                                        <MenuItem value={ 'Services' }>Services</MenuItem>

                                    </Select>
                                </div>
                                <div className="w-100 form-outline datepicker">
                                    <label htmlFor="exampleDatepicker1" className="form-label">Select a date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="exampleDatepicker1"
                                        { ...register('date') }
                                    />
                                </div>

                                {/* .....................
                                In the fure implement this 
                                ......................*/}

                                {/* <div className='w-100 '>
                                    <label htmlhtmlFor='description' className='mb-2'>
                                        Description
                                    </label>
                                    <textarea
                                        className='bg-white'
                                        rows='4'
                                        placeholder='Short description'
                                        {...register('description', { required: true })}
                                    />
                                </div> */}

                            </div>
                            <button
                                type='submit'
                                className='btn text-light'
                                style={ { marginLeft: `calc(100% - 115px)`, background: '#FF257B', color: 'white' } }
                            >
                                Submit
                            </button>
                            { success && (
                                <Alert variant='success' className='mt-2 py-2'>
                                    packages added successfully
                                </Alert>
                            ) }
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ManagePackage;