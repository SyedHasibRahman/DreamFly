import { CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const BookDetails = () => {
    const { BookId } = useParams();
    const [tourPackage, setTourPackage] = useState({});
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/Dashboard/UserOrder';
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/services/${BookId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTourPackage(data))
    }, [BookId]);

    const onSubmit = data => {
        data.email = user.email;
        data.img = tourPackage.images;
        data.name = tourPackage.title;
        data.price = tourPackage.price;
        data.discription = tourPackage.discription;
        data.category = tourPackage.category;
        data.status = "pending"
        axios.post('http://localhost:5000/orders', data)
            // axios.post('https://still-bastion-57482.herokuapp.com/orders', { ...data, img, name, price, discription })
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Order Successful!');
                    navigate(redirect_uri);
                }
            })
    };


    return (
        <>
            <Navigation />
            <Box sx={ { py: 10, bgcolor: "#fafafa" } }>
                <Container>
                    <Grid container spacing={ 4 }>
                        <Grid item xs={ 12 } md={ 6 }>
                            <Box sx={ { borderRadius: 1, } }>
                                <CardMedia
                                    component="img"
                                    alt=""
                                    image={ tourPackage.images }
                                    sx={ { borderRadius: 2, width: "100%", height: "350px" } }
                                />
                            </Box>
                            <Typography sx={ { fontSize: '24px', fontWeight: 600, mt: 5 } }>
                                { tourPackage.fullTitle }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 3 } }>
                                Package Name: { tourPackage.title }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 3 } }>
                                Package Date: { tourPackage.date }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 3 } }>
                                Package Capacity: { tourPackage.person }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 3 } }>
                                Package Price: { tourPackage.price }
                            </Typography>


                            <Typography sx={ { fontSize: '18px', my: 4 } }>
                                { tourPackage.description }
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
                                    <input { ...register("userName", { required: true, maxLength: 200 }) } defaultValue={ user?.displayName || 'User Name' } />
                                    <input { ...register("email") } value={ user?.email || '' } />
                                    <input { ...register("address") } placeholder="Address" />
                                    <input { ...register("phone") } placeholder="Phone Number" />
                                    <input type="submit" value={ `$ ${tourPackage.price}, Confirm Booked` } />
                                    {/* <input type="submit" value="Confirm Order" /> */ }
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default BookDetails;