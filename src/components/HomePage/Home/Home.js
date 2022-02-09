import { Box } from "@mui/material";
import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import Testimonials from "../Testimonial/Testimonials/Testimonials";
import ViewCounts from "../ViewCount/ViewCounts/ViewCounts";

const Home = () => {
    return (
        <Box>
            <Banner />
            <BestService />
            <About />
            <ServiceCards></ServiceCards>
            <ViewCounts></ViewCounts>
            <Testimonials />
        </Box>
    );
};

export default Home;
