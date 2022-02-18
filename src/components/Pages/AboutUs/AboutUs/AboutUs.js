import { Box } from '@mui/material';
import React from 'react';
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
        </Box>
    );
};

export default AboutUs;