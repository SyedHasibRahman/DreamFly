import React from 'react';
import Booking from '../../../Services/Booking/Booking';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

const Services = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h1 className='service-title'>Services</h1>
            <Booking></Booking>
            <Footer></Footer>
        </div>
    );
};

export default Services;