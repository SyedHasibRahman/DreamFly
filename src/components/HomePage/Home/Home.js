import { Box } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
// import ViewCounts from "../ViewCount/ViewCounts/ViewCounts";

const Home = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <Banner />
            <BestService />
            <About />
            <ServiceCards></ServiceCards>
            {/* <ViewCounts></ViewCounts> */}
            <Footer/>
        </Box>
    );
};

export default Home;
