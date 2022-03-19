import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../../../StyledComponent/Buttons/PrimaryButton';
import InputTextField from '../../../../StyledComponent/InputTextField/InputTextField';


const AddBlog = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.post('https://agile-lowlands-71900.herokuapp.com/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }

    return (
        <Box sx={ { p: 5 } }>
            <Typography sx={ { fontSize: '24px', fontWeight: 600, pb: 5 } }>
                Publish Blog
            </Typography>
            <Grid container
                spacing={ 3 }
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={ handleSubmit(onSubmit) }
                sx={ {} }
            >
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Date"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("date", { required: true }) }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Bannar Image Url"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("image1", { required: true }) }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Image Url"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("images2", { required: true }) }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Image Url"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("images3", { required: true }) }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Blog Short Title"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("title", { required: true }) }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Blog Full Title"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("fullTitle", { required: true }) }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Blog Info"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("info", { required: true }) }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Description"
                        fullWidth
                        type="text"
                        required
                        multiline
                        sx={ { bgcolor: "white" } }
                        { ...register("description", { required: true }) }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Your Inspirational Quote"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("quote", { required: true }) }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Quote Name"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("quoteName", { required: true }) }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Tag 1"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("tag1", { required: true }) }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <InputTextField
                        label="Tag2"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("tag2", { required: true }) }
                    />
                </Grid>
                <PrimaryButton type="submit">submit</PrimaryButton>
            </Grid>

        </Box>
    );
};

export default AddBlog;