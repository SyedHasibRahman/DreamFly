import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { Alert } from 'react-bootstrap';

const UpdateBlog = () => {


    const { reset, } = useForm();
    const [success, setSuccess] = useState();
    const { id } = useParams();
    const [blogs, setBlogs] = useState({});
    useEffect(() => {
        const url = `https://agile-lowlands-71900.herokuapp.com/blogs/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data));


    }, [id]);

    //update data
    const handleImageChange = e => {
        const updatedImage = e.target.value;
        const update = { img: updatedImage, title: blogs.title, info: blogs.info, description: blogs.description, tag1: blogs.tag1, tag2: blogs.tag2 }
        setBlogs(update)
    }

    const handleTitleChange = e => {
        const updatetitle = e.target.value;
        const update = { img: blogs.img, title: updatetitle, info: blogs.info, description: blogs.description, tag1: blogs.tag1, tag2: blogs.tag2 }
        setBlogs(update)
    }

    const handleInfoChange = e => {
        const updateInfo = e.target.value;
        const update = { img: blogs.img, title: blogs.title, info: updateInfo, description: blogs.description, tag1: blogs.tag1, tag2: blogs.tag2 }
        setBlogs(update)
    }

    const handleDescriptionChange = e => {
        const updateDescription = e.target.value;
        const update = { img: blogs.img, title: blogs.title, info: blogs.info, description: updateDescription, tag1: blogs.tag1, tag2: blogs.tag2 }
        setBlogs(update)
    }

    const handleTag1Change = e => {
        const updateTag1 = e.target.value;
        const update = { img: blogs.img, title: blogs.title, info: blogs.info, description: blogs.description, tag1: updateTag1, tag2: blogs.tag2 }
        setBlogs(update)
    }
    const handleTag2Change = e => {
        const updateTag2 = e.target.value;
        const update = { img: blogs.img, title: blogs.title, info: blogs.info, description: blogs.description, tag1: blogs.tag1, tag2: updateTag2 }
        setBlogs(update)
    }

    // handleUpdateuser
    const handleUpdateBlog = e => {

        const url = `http://agile-lowlands-71900.herokuapp.com/blogs/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogs)
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
        <Box>
            <div className='row  d-flex justify-content-center my-md-5 my-2'>
                <div className='col-12 col-md-10 col-lg-9'>
                    <div className='add-product box-shadow bg-white p-md-4 p-lg-5 p-3 packageDiv'>
                        <Typography sx={ { fontSize: '24px', color: "white", fontWeight: 600, pb: 3 } }>
                            Update Blog
                        </Typography>
                        <form onSubmit={ handleUpdateBlog }>
                            <div className=''>
                                <div className='w-100 '>
                                    <label htmlFor='Image url' className='mb-2'>
                                        Image url
                                    </label>
                                    <input
                                        type="text"
                                        width="100%"
                                        autoComplete
                                        defaultValue={ blogs.img || '' }
                                        onChange={ handleImageChange }
                                    />
                                </div>
                                <div className='w-100 '>
                                    <label htmlFor='Title' className='mb-2'>
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        width="100%"
                                        autoComplete
                                        defaultValue={ blogs.title || '' }
                                        onChange={ handleTitleChange }
                                    />
                                </div>
                                <div className='w-100'>
                                    <label htmlFor='Info' className='mb-2'>
                                        Info
                                    </label>
                                    <textarea
                                        type="text"
                                        width="100%"
                                        autoComplete
                                        defaultValue={ blogs.info || '' }
                                        onChange={ handleInfoChange }
                                    />
                                </div>
                                <div className='w-100'>
                                    <label htmlFor='Description' className='mb-2'>
                                        Description
                                    </label>
                                    <textarea
                                        type="text"
                                        width="100%"
                                        autoComplete
                                        defaultValue={ blogs.description || '' }
                                        onChange={ handleDescriptionChange }
                                    />
                                </div>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <label htmlFor='Tag 1' className='mb-2'>
                                            Tag 1
                                        </label>
                                        <input
                                            type="text"
                                            width="100%"
                                            autoComplete
                                            defaultValue={ blogs.tag1 || '' }
                                            onChange={ handleTag1Change }
                                        />
                                    </div>
                                    <div className='col-sm-6'>
                                        <label htmlFor='Tag 2' className='mb-2'>
                                            Tag 2
                                        </label>
                                        <input
                                            type="text"
                                            width="100%"
                                            autoComplete
                                            defaultValue={ blogs.tag2 || '' }
                                            onChange={ handleTag2Change }
                                        />
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    className='btn text-light px-5 py-2'
                                    style={ { background: '#FF257B', color: 'white' } }
                                >
                                    Update
                                </button>
                                { success && (
                                    <Alert variant='success' className='mt-2 py-2'>
                                        Packages Update successfully
                                    </Alert>
                                ) }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default UpdateBlog;