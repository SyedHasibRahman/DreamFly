import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import PrimaryButton from '../../../../StyledComponent/Buttons/PrimaryButton';
import InputTextField from '../../../../StyledComponent/InputTextField/InputTextField';
import swal from 'sweetalert';

const UpdateBlog = () => {

    
    const {handleSubmit, reset } = useForm();
    const { id } = useParams();

    const [blogs, setBlogs] = useState({});
    console.log(blogs.img)

    useEffect(() => {
        // fetch('https://agile-lowlands-71900.herokuapp.com/blogs')
        fetch(`http://localhost:5000/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [id]);

    // Update title
    const handleTitleChange = e => {
        const updatedTitle = e.target.value;
        const updatedBlog = { ...blogs }
        updatedBlog.title = updatedTitle;
        setBlogs(updatedBlog.title)
    }

    // Update img
    const handleImageChange = e => {
        const updatedImage = e.target.value;
        const updatedBlog = { ...blogs }
        updatedBlog.img = updatedImage;
        setBlogs(updatedBlog.img)
    }

    // Update info
    const handleInfoChange = e => {
        const updatedInfo = e.target.value;
        const updatedBlog = { ...blogs }
        updatedBlog.info = updatedInfo;
        setBlogs(updatedBlog.info)
    }

    // Update description
    const handleDescriptionChange = e => {
        const updatedDescription = e.target.value;
        const updatedBlog = { ...blogs }
        updatedBlog.description = updatedDescription;
        setBlogs(updatedBlog.description)
    }

    // Update tag1
    const handleTag1Change = e => {
        const updatedTag1 = e.target.value;
        const updatedBlog = { ...blogs }
        updatedBlog.tag1 = updatedTag1;
        setBlogs(updatedBlog.tag1)
    }

    // Update tag2
    const handleTag2Change = e => {
        const updatedTag2 = e.target.value;
        const updatedBlog = { ...blogs }
        updatedBlog.tag2 = updatedTag2;
        setBlogs(updatedBlog.tag2)
    }

    const handleUpdateBlog = e => {
        const url = `http://localhost:5000/blogs/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogs)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal({
                        title: "Good job!",
                        text: "You successfully update your blog",
                        icon: "success",
                      });
                    setBlogs({});
                    reset();
                }
            })
        e.preventDefault();
    }


    return (
        <Box sx={ { p: {md: 0, sm: 3, xs: 0} , mx: { xs: 0, md: "150px" } }}>
            <Typography sx={ { fontSize: '24px', fontWeight: 600, pb: 5 } }>
                Update Blog
            </Typography>
            <Grid container
                spacing={ 3 }
                component="form"
                onSubmit={ handleSubmit(handleUpdateBlog) }
            >
                <Grid item xs={ 12 }>
                    <InputTextField
                    component="inputField"
                        name="img"
                        type="text"
                        autoComplete="img"
                        autoFocus
                        label="Bannar Image Url"
                        fullWidth
                        sx={ { bgcolor: "white" } }
                        defaultValue={ blogs.img || ''}
                        onChange={handleImageChange}
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <InputTextField
                        name="title"
                        type="text"
                        autoComplete="title"
                        autoFocus
                        label="Blog Title"
                        fullWidth
                        sx={ { bgcolor: "white" } }
                        defaultValue={blogs.title || ''}
                        onChange={handleTitleChange}
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <InputTextField
                        label="Blog Info"
                        minRows={3}
                        multiline
                        fullWidth
                        autoFocus
                        type="text"
                        sx={ { bgcolor: "white" } }
                        defaultValue={blogs.info || ''}
                        onChange={handleInfoChange}
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <InputTextField
                        label="Description"
                        minRows={5}
                        multiline
                        fullWidth
                        type="text"
                        required
                        sx={ { bgcolor: "white" } }
                        defaultValue={blogs.description || ''}
                        onChange={handleDescriptionChange}
                    />
                </Grid>
                <Grid item xs={ 12 } sm={6}>
                    <InputTextField
                        label="Tag 1"
                        fullWidth
                        type="text"
                        autoFocus
                        sx={ { bgcolor: "white" } }
                        defaultValue={blogs.tag1 || ''}
                        onChange={handleTag1Change}
                    />
                </Grid>
                <Grid item xs={ 12 } sm={6}>
                    <InputTextField
                        label="Tag 2"
                        fullWidth
                        autoFocus
                        type="text"
                        sx={ { bgcolor: "white" } }
                        defaultValue={blogs.tag2 || ''}
                        onChange={handleTag2Change}
                    />
                </Grid>
                <Grid item xs={ 12 } marginTop="0 px !important">
                    <PrimaryButton  type="submit">Update</PrimaryButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UpdateBlog;