import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import TestimonialSlider from '../../../HomePage/Testimonial/Slider/TestimonialSlider';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import About from '../About/About';
import CounterArea from '../CounterArea/CounterArea';
import OurHistory from '../OurHistory/OurHistory';
import OurTeam from '../OurTeam/OurTeam';
import WhyUs from '../WhyUs/WhyUs';

const AboutUs = () => {
    return (
        <Box>
            <Navigation />
            <About />
            <WhyUs />
            <CounterArea />
            <OurHistory />
            <OurTeam />
            <Box sx={{padding:'100px 0'}}>
                <Container>
                    <Typography  
                        sx={{color:'#5e35b1', fontWeight:'700', fontSize:'20px',marginBottom:'10px', textAlign:'center'}}
                        >
                        Testimonial 
                    </Typography> 
                    <Typography 
                        variant="h2" 
                        sx={{ marginBottom:'10px', textAlign:'center'}}
                        >
                        Our Customer Feedback 
                    </Typography>
                    <TestimonialSlider sx={{marginTop:'50px'}} />
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default AboutUs;