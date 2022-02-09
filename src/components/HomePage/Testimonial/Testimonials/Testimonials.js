import React from 'react';
import { Container, Grid } from '@mui/material';
import TestimonialSlider from '../Slider/TestimonialSlider';

const Testimonials = () => {
    return (
        <div style={ {
            padding: '50px 0',
        } } >
            <Container>
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