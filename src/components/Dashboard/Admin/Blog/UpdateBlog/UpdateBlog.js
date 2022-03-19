import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import PrimaryButton from '../../../../StyledComponent/Buttons/PrimaryButton';
import InputTextField from '../../../../StyledComponent/InputTextField/InputTextField';

const UpdateBlog = () => {

    const { register } = useForm();
    const [blog, setBlog] = useState({});
    console.log(blog)
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/blogs/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [id]);

    // Update User
    const handleNameChange = e => {
        const updatedTitle = e.target.value;
        const updatedBlog = { title: updatedTitle, info: blog.info };
        setBlog(updatedBlog);
    }

    const handleEmailChange = e => {
        const updatedInfo = e.target.value;
        const updatedBlog = { ...blog }
        updatedBlog.info = updatedInfo;
    }
    const handleUpdateBlog = e => {
        const url = `http://localhost:5000/blogs/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setBlog({});
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    return (
        <div>
            <h2>Update</h2>
            <p><small>{ id }</small></p>
            <form onSubmit={ handleUpdateBlog }>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Blog title"
                        onChange={ handleNameChange }
                        defaultValue={ blog.title || '' }
                        fullWidth
                        type="text"
                        sx={ {} }
                        { ...register("info") }
                    />
                    <InputTextField
                        sx={ { bgcolor: "white", my: 2 } }
                        label="Name"
                        id="custom-css-outlined-input"
                        fullWidth
                        required
                        type="text"
                        onChange={ handleNameChange }
                        defaultValue={ blog.title || '' }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Blog Info"
                        onChange={ handleEmailChange }
                        value={ blog.info || '' }
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("info") }
                    />
                    <InputTextField
                        sx={ { bgcolor: "white", my: 2 } }
                        label="Blog Info"

                        fullWidth
                        required
                        type="text"
                        onChange={ handleNameChange }
                        defaultValue={ blog.title }
                    />
                </Grid>
                <PrimaryButton type="submit">submit</PrimaryButton>
            </form>
        </div>
    );
};

export default UpdateBlog;