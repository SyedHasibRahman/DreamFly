import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import TestimonialSlider from '../Slider/TestimonialSlider';

const Testimonials = () => {
    return (
        <div style={ {
            padding: '50px 0',
        } } >
            <Container>
                <Grid sx={ {
                    textAlign: 'center',
                } }>
                    <Typography variant='h6'>
                        <span style={ {
                            color: '#2CC0FF',
                        } }>DreamFly</span> Testimonial</Typography>
                    <Typography variant='h4'>Our Customer Feedback</Typography>
                </Grid>
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } lg={ 8 } sx={ {
                        padding: '15px',
                    } }>
                        <TestimonialSlider />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 } sx={ {
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    } }>
                        <img style={ { width: "100%" } } src="https://themeim.com/demo/flynext/assets/images/client/client-big.png" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Testimonials;