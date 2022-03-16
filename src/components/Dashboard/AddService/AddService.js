import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Container } from 'react-bootstrap';
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/service', data)
        .then(res=>{
            if (res.data.insertedId) {
                Alert('Service Added Successfully');
                reset();
            }
        })
    }
    return (
        <Container>
        <div className='row  d-flex justify-content-center mt-5'>
            <div className='col-12 col-md-10 col-lg-9 mid '>
                <div className='add-product box-shadow bg-white p-4 packageDiv'>
                    <h3 className='mb-5 heading-main text-light'>Add Service</h3>

                    <form onSubmit={handleSubmit(onSubmit) }>
                        <div className='col-12 d-md-flex'>
                            <div className='w-100 '>
                                <label htmlFor='title' className='mb-2'>
                                    Service Title
                                </label>
                                <input
                                {...register("title")}
                                    required
                                    placeholder='Service Title'
                                />
                            </div>
                            <div className='w-100 '>
                                <label htmlFor='name' className='mb-2'>
                                Service Name
                                </label>
                                <input
                                {...register("name")}

                                    required
                                    placeholder='Service Name'
                                   
                                />
                            </div>
                            <div className='w-100 '>
                                <label htmlFor='seat' className='mb-2'>
                                Service Seat
                                </label>
                                <input
                                  {...register("seat")}

                                    required
                                    placeholder='Service Seat'
                                />
                            </div>

                            <div className='w-100 ps-0 ps-md-3'>
                                <label htmlFor='price' className='mb-2'>
                                Service Price
                                </label>
                                <input
                                  {...register("price")}
                                    required
                                    placeholder='Enter price'
                                   
                                />
                            </div>
                        </div>
                        <div className='col-12 '>
                            <div className='w-100 '>
                                <label htmlFor='image' className='mb-2'>
                                    Image
                                </label>
                                <input
                                  {...register("img")}
                                    required placeholder='Image Url'/>
                            </div>
                            <div className='w-100 '></div>
                
                            <div className='w-100 '>
                                <label htmlFor='image' className='mb-2'>
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
                                   

                                >
                                    <MenuItem value={ 'General' }>General</MenuItem>
                                    <MenuItem value={ 'Packages' }>Packages</MenuItem>
                                    <MenuItem value={ 'Services' }>Services</MenuItem>

                                </Select>
                            </div>
                          

                        </div>
                        <button
                            type='submit'
                            className='btn text-light'
                            style={ { marginLeft: `calc(100% - 115px)`, background: '#FF257B', color: 'white' } }
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </Container>
    );
};

export default AddService;