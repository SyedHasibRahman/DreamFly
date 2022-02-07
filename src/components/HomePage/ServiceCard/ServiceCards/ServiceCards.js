import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Container, Typography } from '@mui/material';
import './ServiceCards.css'
import CleanHandsRoundedIcon from '@mui/icons-material/CleanHandsRounded';



const ServiceCards = () => {

    return (
        <Container>

            <Box sx={{ flexGrow: 1 }}>
                <Box style={{ textAlign: 'center', margin: '20px', padding: '10px' }}>

                    <Typography gutterBottom variant="h6" component="div">
                        Discover <span style={{ color: '#DCBB87' }}>Flynext</span> Benefits
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div">
                        Discover Private Jet Benefits
                    </Typography>
                </Box>
                <Grid container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card className='cardBody'>
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
    );
};

export default ServiceCards;