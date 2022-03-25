import React from 'react';
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import { useSelector } from "react-redux";
import './SeaechFlight.css'
    ;
import { Link } from 'react-router-dom';
import SecondaryButton from '../../../StyledComponent/Buttons/SecondaryButton';

const SearchFlights = () => {

    const booking = useSelector((state) => state.flightSlice.filterDate);
    
    const dateAndPass = useSelector((state) => state.flightSlice.dateAndPass);

    const from = [...new Map((booking.map((data) => data.from)).map(item => [item.id, item])).values()];

    const to = [...new Map((booking.map((data) => data.to)).map(item => [item.id, item])).values()];

    return (
        <div style={ { bgcolor: "#f5f5f5" } }>
            <Container>
                <Box sx={ { py: 5 , display: {sm: 'block', xs: "none"}} }>
                    <Grid container sx={ { bgcolor: "#5e35b1", borderRadius: 2, mb: 2, display: "flex", alignItems: "center", justifyContent: "center" } }>
                        <Grid item xs={ 12 }>
                            <Box sx={ { display: "flex", justifyContent: 'space-between', py: 2, px: 2 } }>
                                <Typography
                                    sx={ { color: "white", fontSize: {md: "20px", sm: "18px"}, fontWeight: 600 } }
                                >
                                    Place: { from } to { to }
                                </Typography>
                                <Typography
                                    sx={ { color: "white", fontSize: {md: "20px", sm: "18px"}, fontWeight: 600 } }
                                >
                                    Date: { dateAndPass.date }
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Grid container sx={ { display: "flex", alignItems: "center", pb: 3 } }>
                                <Grid item sm={ 2 }>
                                    <Typography variant="h4"
                                        sx={ { textAlign: "center", color: "white" } }
                                    >
                                        Image
                                    </Typography>
                                </Grid>
                                <Grid item sm={ 2 }>
                                    <Typography variant="h4"
                                        sx={ { textAlign: "center", color: "white" } }
                                    >
                                        Airline
                                    </Typography>
                                </Grid>
                                <Grid item sm={ 2 }>
                                    <Typography variant="h4"
                                        sx={ { textAlign: "center", color: "white" } }
                                    >
                                        Departure
                                    </Typography>
                                </Grid>
                                <Grid item sm={ 2 }>
                                    <Typography variant="h4"
                                        sx={ { textAlign: "center", color: "white" } }
                                    >
                                        Arrival
                                    </Typography>
                                </Grid>
                                <Grid item sm={ 2 }>
                                    <Typography variant="h4"
                                        sx={ { textAlign: "center", color: "white" } }
                                    >
                                        Price
                                    </Typography>
                                </Grid>
                                <Grid item sm={ 2 }>
                                    <Typography variant="h4"
                                        sx={ { textAlign: "center", color: "white" } }
                                    >
                                        Booking
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {
                        booking.map((data) => {

                            const { departure, arrival, flightName, price, img, _id } = data;

                            return (

                                <Grid container
                                    sx={ { display: "flex", alignItems: "center", bgcolor: "#ede7f6", mb: 2, py: 1, borderRadius: 3 } }
                                >
                                    <Grid item sm={ 2 }
                                        sx={ { textAlign: "center" } }
                                    >
                                        <img className='flight-img' src={ img } alt="" />
                                    </Grid>
                                    <Grid item sm={ 2 }
                                        sx={ { textAlign: "center", fontWeight: {md: 700, sm: 600}, fontSize: {md: "20px", sm: "17px"}}}>
                                        { flightName }
                                    </Grid>
                                    <Grid item sm={ 2 }
                                        sx={ { textAlign: "center", fontWeight: {md: 700, sm: 600}, fontSize: {md: "20px", sm: "17px"}}}
                                    >
                                        { departure }
                                    </Grid>
                                    <Grid item sm={ 2 }
                                        sx={ { textAlign: "center", fontWeight: {md: 700, sm: 600}, fontSize: {md: "20px", sm: "17px"}}}
                                    >
                                        { arrival }
                                    </Grid>
                                    <Grid item sm={ 2 }
                                        sx={ { textAlign: "center", fontWeight: {md: 700, sm: 600}, fontSize: {md: "20px", sm: "17px"}}}
                                    >
                                        { price }</Grid>
                                    <Grid item sm={ 2 }
                                        sx={ { textAlign: "center", } }
                                        >
                                        <Link className='link-td-none'
                                            to={ `/SeaechFlightDetails/${_id}` }
                                            >
                                            <Button 
                                                sx={ { textAlign: "center", fontWeight: 700, color: "#4527a0", fontSize: {md: "18px", sm: "16px"}}}
                                                >
                                                Book
                                            </Button>  
                                        </Link>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }


                </Box>

                {/* show in xs device  */}
                <Box className="flight-card" sx={{display: {sm: 'none', xs: "block"}}}>
                    {
                        booking.map((data) => {

                        const { departure, arrival, flightName, price, img, _id } = data;

                        return (
                            <Grid container 
                                sx={ {bgcolor: "#ede7f6",borderRadius: 3, p: 4, my:4 } }
                            >
                                <Grid item xs={ 12 }>
                                    <img className='flight-img' src={ img } alt="" />
                                </Grid>
                                <Grid item xs={ 12 } className="flight-item">
                                    <Typography sx={{fontWeight: 700, fontSize: "18px"}}>
                                        AirLine:
                                    </Typography>
                                    <Typography sx={{fontWeight: 700, fontSize: "18px"}}>
                                        { flightName }
                                    </Typography>
                                </Grid>
                                <Grid item xs={ 12 } className="flight-item">
                                    <Typography sx={{fontWeight: 700, fontSize: "18px"}}>
                                        Departure:
                                    </Typography>
                                    <Typography sx={{fontWeight: 700, fontSize: "18px"}}>
                                        { departure }
                                    </Typography>
                                </Grid>
                                <Grid item xs={ 12 } className="flight-item">
                                    <Typography sx={{fontWeight: 700, fontSize: "18px"}}>
                                        Arrival:
                                    </Typography>
                                    <Typography sx={{fontWeight: 700, fontSize: "18px"}}>
                                        { arrival }
                                    </Typography>
                                </Grid>
                                <Grid item xs={ 12 } className="flight-item">
                                    <Typography sx={{fontWeight: 700, fontSize: "18px"}}>
                                        Price:
                                    </Typography>
                                    <Typography sx={{fontWeight: 700, fontSize: "18px"}}>
                                        ${ price }
                                    </Typography>
                                </Grid>
                                <Grid item xs={ 12 } sx={{textAlign: "center", mt: 1}}>
                                    <Link className='link-td-none'
                                        to={ `/SeaechFlightDetails/${_id}`}
                                        >
                                        <SecondaryButton>
                                            Book Now
                                        </SecondaryButton>
                                    </Link>
                                </Grid>
                            </Grid>
                        )}
                    )}
                </Box>
            </Container>
        </div>
    );
};

export default SearchFlights;