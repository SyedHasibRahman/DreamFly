import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import TestimonialSlider from '../../../HomePage/Testimonial/Slider/TestimonialSlider';
import About from '../About/About';
import CounterArea from '../CounterArea/CounterArea';
import OurHistory from '../OurHistory/OurHistory';
import OurTeam from '../OurTeam/OurTeam';
import WhyUs from '../WhyUs/WhyUs';

const AboutUs = () => {
    return (
        <Box>
            <About />
            <WhyUs />
            <CounterArea />
            <OurHistory />
            <OurTeam />
            <Box sx={{padding:'50px 0'}}>
            <Container>
                <Box>
                <Typography variant="h4" component="h2" sx={{fontWeight:'700', fontSize:'20px', marginBottom:'20px', fontFamily:'"Mulish", sans-serif', color:'#dcbb87', lineHeight:'1.5em', textAlign:'center'}}> Our team </Typography>
                <Typography variant="h3" component="h2" sx={{fontWeight:'700', fontSize:'40px', lineHeight:'1.3em', color:'#19232d', fontFamily:'"Playfair Display", sans-serif', textAlign:'center'}}> Meet Our Team Members </Typography>
                </Box>
            <TestimonialSlider />
            </Container>
            </Box>
        </Box>
    );
};

export default AboutUs;