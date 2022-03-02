import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Container, Typography } from '@mui/material';
import './ServiceCards.css'
import CleanHandsRoundedIcon from '@mui/icons-material/CleanHandsRounded';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";


const ServiceCards = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 100,

        });
    })

    return (
        <Box sx={{bgcolor: "#F5F3F1" }}>
        <Container>
            <Box sx={ { flexGrow: 1, padding: "100px 0"} }>
                <Box data-aos='zoom-in-down' style={ { textAlign: 'center'} }>

                    <Typography 
                    gutterBottom 
                    sx={{fontSize: "20px", fontWeight: 700}}
                    >
                        Discover <span style={ { color: '#4527a0', fontSize: "20px", fontWeight: 700 } }>DreamFly</span> Benefits
                    </Typography>
                    <Typography gutterBottom variant="h2">
                        Discover Private Jet Benefits
                    </Typography>
                </Box>
                <Grid container spacing={ 0 } sx={{mt: "50px"}} columns={ { xs: 4, sm: 8, md: 12 } }>
                    { Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 } key={ index }>
                            <Card className='cardBody' data-aos='zoom-in'>
                                <>

                                    <CleanHandsRoundedIcon className='cardIcon' style={{ width: '100px', height: '100px', padding: '20px' }} color="dark" />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Luxury & Comfort Travel
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on money
                                        </Typography>
                                    </CardContent>
                                </>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
        </Box>
    );
};

export default ServiceCards;