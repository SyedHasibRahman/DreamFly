import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../../../StyledComponent/Buttons/PrimaryButton';
import InputTextField from '../../../../StyledComponent/InputTextField/InputTextField';
import swal from 'sweetalert';


const AddBlog = () => {

    const { register, handleSubmit, reset } = useForm();
    const date = new Date().toLocaleString('en-US', {
        weekday: 'short', // long, short, narrow
        day: 'numeric', // numeric, 2-digit
        month: 'long', // numeric, 2-digit, long, short, narrow
        year: 'numeric', // numeric, 2-digit
        // hour: 'numeric', // numeric, 2-digit
        // minute: 'numeric', // numeric, 2-digit
        // second: 'numeric', // numeric, 2-digit
    });
    console.log(date)
    
    const onSubmit = (data) => {

        axios.post('http://localhost:5000/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "You successfully publish your blog",
                        icon: "success",
                        
                      });
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
                        defaultValue={date}
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
                        label="Blog Title"
                        fullWidth
                        type="text"
                        sx={ { bgcolor: "white" } }
                        { ...register("title", { required: true }) }
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