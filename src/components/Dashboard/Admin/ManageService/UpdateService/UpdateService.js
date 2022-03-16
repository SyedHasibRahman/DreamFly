import { Alert, Container, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateService = () => {
    const { reset, } = useForm();
    const [success, setSuccess] = useState();
    const { id } = useParams();
    console.log(id)
    const [service, setService] = useState({});
    console.log(service.date)
    console.log(service.description)
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));


    }, [id]);
    //update data
    const handleImageChange = e => {
        const updatedImage = e.target.value;
        const update = { img: updatedImage, title: service.title, name: service.name, seat: service.seat, price: service.price, category: service.category,}
        setService(update)
    }

    const handleTitleChange = e => {
        const updatetitle = e.target.value;
        const update = { title: updatetitle, img: service.img, name: service.name, seat: service.seat, price: service.price, category: service.category,}
        setService(update)
    }

    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const update = { price: updatePrice, img: service.img, name: service.name, seat: service.seat, title: service.title, category: service.category, }
        setService(update)
    }

    const handleNameChange = e => {
        const updateName = e.target.value;
        const update = { name: updateName, img: service.img, price: service.price, seat: service.seat, title: service.title, category: service.category, }
        setService(update)
    }
    const handleSeatChange = e => {
        const updateSeat = e.target.value;
        const update = { seat: updateSeat, img: service.img, price: service.price, name: service.name, title: service.title, category: service.category, }
        setService(update)
    }

    const handleCategoryChange = e => {
        const updateCategory = e.target.value;
        const update = { category: updateCategory, img: service.img, name: service.name, seat: service.seat, title: service.title,  price: service.price,}
        setService(update)
    }
    


    const handleUpdateuser = e => {

        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                    reset();
                    setTimeout(() => {
                        setSuccess(false);
                    }, 5000);
                }
            });
        e.preventDefault();
    }
    return (
        <Container>
            <div className='row  d-flex justify-content-center mt-5'>
                <div className='col-12 col-md-10 col-lg-9 mid '>
                    <div className='add-product box-shadow bg-white p-4 packageDiv'>
                        <h3 className='mb-5 heading-main text-light'>Update Service</h3>

                        <form onSubmit={ handleUpdateuser }>
                            <div className='col-12 d-md-flex'>
                                <div className='w-100 '>
                                    <label htmlFor='title' className='mb-2'>
                                        Service Title
                                    </label>
                                    <input
                                        defaultValue={ service.title || '' }

                                        required
                                        placeholder='Service Title'
                                        onChange={ handleTitleChange }
                                    />
                                </div>
                                <div className='w-100 '>
                                    <label htmlFor='name' className='mb-2'>
                                    Service Name
                                    </label>
                                    <input
                                        defaultValue={ service.name || '' }

                                        required
                                        placeholder='Service Name'
                                        onChange={ handleNameChange }
                                    />
                                </div>
                                <div className='w-100 '>
                                    <label htmlFor='seat' className='mb-2'>
                                    Service Seat
                                    </label>
                                    <input
                                        defaultValue={ service.seat || '' }

                                        required
                                        placeholder='Service Seat'
                                        onChange={ handleSeatChange }
                                    />
                                </div>

                                <div className='w-100 ps-0 ps-md-3'>
                                    <label htmlFor='price' className='mb-2'>
                                    Service Price
                                    </label>
                                    <input
                                        value={ service.price || '' }
                                        required
                                        placeholder='Enter price'
                                        onChange={ handlePriceChange }
                                    />
                                </div>
                            </div>
                            <div className='col-12 '>
                                <div className='w-100 '>
                                    <label htmlFor='image' className='mb-2'>
                                        Image
                                    </label>
                                    <input
                                        value={ service.images || '' }
                                        required placeholder='Image Url' onChange={ handleImageChange } />
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
                                        onChange={ handleCategoryChange }
                                        label="Age"
                                        value={ service.category || '' }

                                    >
                                        <MenuItem value={ 'General' }>General</MenuItem>
                                        <MenuItem value={ 'Packages' }>Packages</MenuItem>
                                        <MenuItem value={ 'Services' }>Services</MenuItem>

                                    </Select>
                                </div>
                                {/* <div class="w-100 form-outline datepicker">
                                    <label for="exampleDatepicker1" class="form-label">Select a date</label>
                                    <input
                                        value={service.date || ''}
                                        type="date"
                                        class="form-control"
                                        id="exampleDatepicker1"
                                        onChange={handleDatechange}
                                    />
                                </div> */}
                               
                                {/* <div className='w-100 '>
                                    <label htmlFor='description' className='mb-2'>
                                        Description
                                    </label>
                                    <textarea
                                        defaultValue={service.description || ''}
                                        className='bg-white'
                                        rows='4'
                                        placeholder='Short description'
                                        onChange={handledetailschange}
                                    />
                                </div> */}

                            </div>
                            <button
                                type='submit'
                                className='btn text-light'
                                style={ { marginLeft: `calc(100% - 115px)`, background: '#FF257B', color: 'white' } }
                            >
                                Update
                            </button>
                            { success && (
                                <Alert variant='success' className='mt-2 py-2'>
                                    Packages Update successfully
                                </Alert>
                            ) }
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default UpdateService;