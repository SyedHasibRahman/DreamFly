import React from 'react';
import PersonalFlight from '../../../HomePage/PersonalFlight/PersonalFlight/PersonalFlight';
import Booking from '../../../Services/Booking/Booking';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

const Services = () => {
    return (
        <div>
            <Navigation />
            <PersonalFlight />
            <Booking />
            <Footer />
        </div>
    );
};

export default Services;