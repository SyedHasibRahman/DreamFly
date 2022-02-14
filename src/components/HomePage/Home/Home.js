import { Box } from "@mui/material";
import React from "react";
import Booking from "../../Services/Booking/Booking";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import ViewCounts from "../ViewCount/ViewCounts/ViewCounts";

const Home = () => {
    return (
        <Box>
            <Banner />
            <BestService />
            <About />
            <ServiceCards></ServiceCards>
            <ViewCounts></ViewCounts>
            <Booking></Booking>
        </Box>
    );
};

export default Home;
