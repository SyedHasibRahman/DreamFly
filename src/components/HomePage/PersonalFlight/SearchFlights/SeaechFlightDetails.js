import { CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import InputTextField from '../../../StyledComponent/InputTextField/InputTextField';
import SecondaryButton from '../../../StyledComponent/Buttons/SecondaryButton';

const SeaechFlightDetails = () => {
    const { SeaechId } = useParams();
    const [SearchFlight, setSearchFlight] = useState({});
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/Dashboard/UserOrder';
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/flight/${SeaechId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSearchFlight(data))
    }, [SeaechId]);

    const onSubmit = data => {
        data.email = user.email;
        data.img = SearchFlight.img;
        data.name = SearchFlight.flightName;
        data.price = SearchFlight.price;
        data.from = SearchFlight.from;
        data.to = SearchFlight.to;
        data.category = "SearchFlight";
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
                                    image={ SearchFlight.img }
                                    sx={ { borderRadius: 2, width: "100%", height: "350px" } }
                                />
                            </Box>
                            <Typography sx={ { fontSize: '24px', fontWeight: 600, mt: 5 } }>
                                { SearchFlight.fullTitle }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 3 } }>
                                Destination: { SearchFlight.from } to { SearchFlight.to }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 3 } }>
                                Arrival: { SearchFlight.arrival }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 3 } }>
                                Flight Name: { SearchFlight.flightName }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 3 } }>
                                Package Fare: { SearchFlight.price }
                            </Typography>


                            <Typography sx={ { fontSize: '18px', my: 4 } }>
                                { SearchFlight.description }
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
                                        { ...register("userName", { required: true, maxLength: 200 }) } defaultValue={ user?.displayName || 'User Name' } />
                                    <InputTextField
                                        fullWidth { ...register("email") } value={ user?.email || '' } />
                                    <InputTextField
                                        fullWidth { ...register("address") } placeholder="Address" />
                                    <InputTextField
                                        fullWidth { ...register("phone") } placeholder="Phone Number" />
                                    <SecondaryButton
                                        fullWidth type="submit" >
                                        { SearchFlight.price } Confirm Booked
                                    </SecondaryButton>
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

export default SeaechFlightDetails;