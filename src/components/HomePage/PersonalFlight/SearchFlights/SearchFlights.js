import React from 'react';
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import { useSelector } from "react-redux";
import './SeaechFlight.css'
    ;
import { Link } from 'react-router-dom';

const SearchFlights = () => {

    // const [flights, setFlights] = useState([]);
    // console.log(flights);

    const booking = useSelector((state) => state.flightSlice.filterDate);
    
    const dateAndPass = useSelector((state) => state.flightSlice.dateAndPass);

    const from = [...new Map((booking.map((data) => data.from)).map(item => [item.id, item])).values()];

    const to = [...new Map((booking.map((data) => data.to)).map(item => [item.id, item])).values()];

    return (
        <div style={ { bgcolor: "#f5f5f5" } }>
            <Container>

                <Box sx={ { py: 5 } }>
                    <Grid container sx={ { bgcolor: "#5e35b1", borderRadius: 2, mb: 2, display: "flex", alignItems: "center", justifyContent: "center" } }>
                        <Grid item xs={ 12 }>
                            <Box sx={ { display: "flex", justifyContent: 'space-between', py: 2, px: 2 } }>
                                <Typography
                                    sx={ { color: "white", fontSize: "20px", fontWeight: 600 } }
                                >
                                    Place: { from } to { to }
                                </Typography>
                                <Typography
                                    sx={ { color: "white", fontSize: "20px", fontWeight: 600 } }
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
                                        Img
                                    </Typography>
                                </Grid>
                                <Grid item sm={ 2 }>
                                    <Typography variant="h4"
                                        sx={ { textAlign: "center", color: "white" } }
                                    >
                                        Airlines
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
                                        sx={ { textAlign: "center", fontWeight: 700, fontSize: "20px" } }>
                                        { flightName }
                                    </Grid>
                                    <Grid item
                                        sm={ 2 } sx={ { textAlign: "center", fontWeight: 700, fontSize: "20px" } }
                                    >
                                        { departure }
                                    </Grid>
                                    <Grid item
                                        sm={ 2 } sx={ { textAlign: "center", fontWeight: 700, fontSize: "20px" } }
                                    >
                                        { arrival }
                                    </Grid>
                                    <Grid item
                                        sm={ 2 } sx={ { textAlign: "center", fontWeight: 700, fontSize: "20px" } }
                                    >
                                        { price }</Grid>
                                    <Grid item sm={ 2 }
                                        sx={ { textAlign: "center", } }>
                                        <Button>
                                            <Link to={ `/SeaechFlightDetails/${_id}` }>
                                                Book Now
                                            </Link>
                                        </Button>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }


                </Box>


            </Container>

        </div>
    );
};

export default SearchFlights;

// {/* <Box sx={{display: "flex", mt: 3, justifyContent: 'space-between'}}>
//                     <img src="https://bdtickets.com/images/airlines/NOVOAIR.png" width="150px" alt="" />
//                     <Box>
//                         <Typography sx={{}}> Novo Air </Typography>
//                         <Typography sx={{fontSize: "16px"}}> Flight No </Typography>
//                     </Box>
//                     <Typography sx={{}}> 04:40 PM </Typography>
//                     <Typography sx={{}}> 04:40 PM </Typography>
//                     <Typography sx={{}}> 21,600 </Typography>
//                 </Box> */
//             }