import { Box } from "@mui/material";
import React from "react";
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
            <ServiceCards />
            <ViewCounts />
        </Box>
    );
};

export default Home;
