import { CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../../../hooks/useAuth';
import Navigation from '../../../../Shared/Navigation/Navigation';
import InputTextField from '../../../../StyledComponent/InputTextField/InputTextField';
import SecondaryButton from '../../../../StyledComponent/Buttons/SecondaryButton';
import Footer from '../../../../Shared/Footer/Footer';
import swal from 'sweetalert';


const CourseEnroll = () => {

    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const { user } = useAuth();
    console.log(user.displayName)
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/Dashboard/UserOrder';
    const { register, handleSubmit } = useForm();
    

    useEffect(() => {
        const url = `http://localhost:5000/courses/${courseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [courseId]);

    const onSubmit = data => {
        data.email = user.email;
        data.img = course.images;
        data.name = course.title;
        data.price = course.price;
        data.duration = course.duration;
        data.status = "pending"
        axios.post('http://localhost:5000/orders', data)
            // axios.post('https://still-bastion-57482.herokuapp.com/orders', { ...data, img, name, price, discription })
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "You successfully Enroll!",
                        icon: "success",
                        
                      });
                    navigate(redirect_uri);
                }
            })
    };

    return (
        <div>
            <Navigation />
            <Box sx={ { py: 10, bgcolor: "#fafafa" } }>
                <Container>
                    <Grid container spacing={ 4 }>
                        <Grid item xs={ 12 } md={ 6 }>
                            <Box sx={ { borderRadius: 1, } }>
                                <CardMedia
                                    component="img"
                                    alt=""
                                    image={ course.images }
                                    sx={ { borderRadius: 2, width: "100%", height: "350px" } }
                                />
                            </Box>
                            <Typography sx={ { fontSize: '24px', fontWeight: 600, mt: 4 } }>
                                { course.title }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 1 } }>
                                Duration: { course.hours }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 1 } }>
                                Course Price: { course.price }
                            </Typography>
                            {/* <Link style={ { textDecoration: "none", textAlign: "center", cursor: "pointer" } }
                                to='/'
                            >
                                <Box sx={ { display: "flex", textAlign: "center", ml: 1 } }>

                                    <KeyboardBackspaceIcon sx={ { color: '#5e35b1', fontWeight: 600, textTransform: 'capitalize', fontSize: 30, } } />

                                    <Typography sx={ { color: '#5e35b1', fontWeight: 600, ml: 1, fontSize: "20px", } }>
                                        Back to Home
                                    </Typography>
                                </Box>
                            </Link> */}
                        </Grid>

                        {/* Blog Sideber  */ }
                        <Grid item xs={ 12 } md={ 6 } sx={ {} }>
                            <Grid container>
                                <h2 className="pt-4">Shipping and Billing</h2>
                                {/* <input type="date" /> */ }
                                <form className='tourdetails' onSubmit={ handleSubmit(onSubmit) }>
                                    <InputTextField
                                        fullWidth
                                        { ...register("Name", { required: true,}) } defaultValue={ user?.displayName || 'Full Name' } />
                                    <InputTextField
                                        fullWidth { ...register("email") } value={ user?.email || '' } />
                                    <InputTextField
                                        fullWidth { ...register("address") } placeholder="Address" />
                                    <InputTextField
                                        fullWidth { ...register("phone") } placeholder="Phone Number" />
                                    <SecondaryButton
                                        fullWidth type="submit" >
                                        { course.price } Confirm Booked
                                    </SecondaryButton>
                                    {/* <input type="submit" value="Confirm Order" /> */ }
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </div>
    );
};

export default CourseEnroll;