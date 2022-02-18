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
            <Box sx={{padding:'50px 0'}}>
            <Container>
                <Box>
                <Typography variant="h4" component="h2" sx={{fontWeight:'700', fontSize:'20px', marginBottom:'20px', fontFamily:'"Mulish", sans-serif', color:'#dcbb87', lineHeight:'1.5em', textAlign:'center'}}> Testimonial </Typography>
                <Typography variant="h3" component="h2" sx={{fontWeight:'700', fontSize:'40px', lineHeight:'1.3em', color:'#19232d', fontFamily:'"Playfair Display", sans-serif', textAlign:'center'}}> Our Customer Feedback </Typography>
                </Box>
            <TestimonialSlider />
            </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default AboutUs;