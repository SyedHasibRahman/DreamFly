import { Container, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './UpadatePackage.css'
import swal from 'sweetalert';

const UpadatePackage = () => {
    const { reset, } = useForm();
    const [success, setSuccess] = useState();
    const { id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tourPackages/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));


    }, [id]);
    //update data
    const handleImagechange = e => {
        const updatedImage = e.target.value;
        const update = { images: updatedImage, title: service.title, price: service.price, person: service.person, description: service.description, category: service.category, date: service.date }
        setService(update)
    }

    const handleTitlechange = e => {
        const updatetitle = e.target.value;
        const update = { images: service.images, title: updatetitle, price: service.price, person: service.person, description: service.description, category: service.category, date: service.date }
        setService(update)
    }

    const handlePricechange = e => {
        const updatePrice = e.target.value;
        const update = { images: service.images, title: service.title, price: updatePrice, person: service.person, description: service.description, category: service.category, date: service.date }
        setService(update)
    }

    const handlePersonchange = e => {
        const updatePerson = e.target.value;
        const update = { images: service.images, title: service.title, price: service.price, person: updatePerson, description: service.description, category: service.category, date: service.date }
        setService(update)
    }

    const handleCategorychange = e => {
        const updateDate = e.target.value;
        const update = { images: service.images, title: service.title, price: service.price, person: service.person, description: service.description, category: updateDate, date: service.date }
        setService(update)
    }
    const handleDatechange = e => {
        const updateDate = e.target.value;
        const update = { images: service.images, title: service.title, price: service.price, person: service.person, description: service.description, category: service.category, date: updateDate }
        setService(update)
    }

    // handleUpdateuser
    const handleUpdateuser = e => {

        const url = `http://localhost:5000/tourPackages/${id}`;
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

        swal({
            title: "Good job!",
            text: "Your Update Completed!",
            icon: "success",
            button: "Done",
        });

    }
    return (
        <Container>
            <div className='row  d-flex justify-content-center mt-5'>
                <div className='col-12 col-md-10 col-lg-9 mid '>
                    <div className='add-product box-shadow bg-white p-4 packageDiv'>
                        <h3 className='mb-5 heading-main text-light'>Update Package</h3>

                        <form onSubmit={handleUpdateuser}>
                            <div className='col-12 d-md-flex'>
                                <div className='w-100 '>
                                    <label htmlhtmlFor='name' className='mb-2'>
                                        Package Title
                                    </label>
                                    <input
                                        defaultValue={service.title || ''}

                                        required
                                        placeholder='Package Name'
                                        onChange={handleTitlechange}
                                    />
                                </div>

                                <div className='w-100 ps-0 ps-md-3'>
                                    <label htmlhtmlFor='price' className='mb-2'>
                                        Price
                                    </label>
                                    <input
                                        value={service.price || ''}
                                        required
                                        placeholder='Enter price'
                                        onChange={handlePricechange}
                                    />
                                </div>
                            </div>
                            <div className='col-12 '>
                                <div className='w-100 '>
                                    <label htmlhtmlFor='image' className='mb-2'>
                                        Image
                                    </label>
                                    <input
                                        value={service.images || ''}
                                        required placeholder='Image Url' onChange={handleImagechange} />
                                </div>
                                <div className='w-100 '></div>
                                <div className='w-100 '>
                                    <label htmlhtmlFor='image' className='mb-2'>
                                        Total persion
                                    </label>
                                    <input
                                        value={service.person || ''}
                                        required
                                        placeholder='Persion'
                                        onChange={handlePersonchange}

                                    />
                                </div>
                                <div className='w-100 '>
                                    <label htmlhtmlFor='image' className='mb-2'>
                                        Category
                                    </label>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        onChange={handleCategorychange}
                                        label="Age"
                                        value={service.category || ''}

                                    >
                                        <MenuItem value={'General'}>General</MenuItem>
                                        <MenuItem value={'Packages'}>Packages</MenuItem>
                                        <MenuItem value={'Services'}>Services</MenuItem>

                                    </Select>
                                </div>

                                <div className="w-100 form-outline">
                                    <label className="form-label">Select a date</label>
                                    <input
                                        value={service.date || ''}
                                        className="form-control"

                                        placeholder='mm/dd/yyyy'
                                        onChange={handleDatechange}
                                    />
                                </div>

                            </div>
                            <button
                                type='submit'
                                className='btn text-light'
                                style={{ marginLeft: `calc(100% - 115px)`, background: '#FF257B', color: 'white' }}
                            >
                                Update
                            </button>
                            {success && (
                                <Alert variant='success' className='mt-2 py-2'>
                                    Packages Update successfully
                                </Alert>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default UpadatePackage;