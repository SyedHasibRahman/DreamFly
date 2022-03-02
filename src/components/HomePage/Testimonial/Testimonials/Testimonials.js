import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import TestimonialSlider from '../Slider/TestimonialSlider';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Testimonials = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 100,

        });
    })
    return (
        <div style={ {
            padding: '20px 0 50px 0',
        } } >
            <Container data-aos='zoom-in-down'>
                <Grid sx={ {
                    textAlign: 'center',
                } }>
                    
                    <Typography 
                    gutterBottom 
                    sx={{fontSize: "20px", fontWeight: 700}}
                    >
                        <span style={ { color: '#4527a0', fontSize: "20px", fontWeight: 700 } }>DreamFly</span> Testimonial
                    </Typography>
                    <Typography gutterBottom variant="h2">
                        Our Customer Feedback
                    </Typography>
        
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={8} lg={8} sx={{
                        padding: '15px',
                    }}
                        data-aos='slide-right'
                    >
                        <TestimonialSlider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                        data-aos='zoom-in'
                    >
                        <img style={{ width: "100%" }} src="https://themeim.com/demo/flynext/assets/images/client/client-big.png" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Testimonials;