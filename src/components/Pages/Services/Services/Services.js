import React from 'react';
import PersonalFlight from '../../../HomePage/PersonalFlight/PersonalFlight/PersonalFlight';
import Booking from '../../../Services/Booking/Booking';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

const Services = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <Typography 
                variant="h2" 
                sx={{ marginBottom:'10px', textAlign:'center'}}
                        >
                Our Services 
            </Typography> */}
            <PersonalFlight/>
            <Booking></Booking>
            <Footer></Footer>
        </div>
    );
};

export default Services;