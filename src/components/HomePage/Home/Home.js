import { Box } from "@mui/material";
import React from "react";
import Booking from "../../Services/Booking/Booking";
import TourPackages from "../../Shared/TourPackages/TourPackages";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import Testimonials from "../Testimonial/Testimonials/Testimonials";
import PersonalFlight from "../PersonalFlight/PersonalFlight";
import NotFound from "../../Pages/NotFound/NotFound";


const Home = () => {
  return (
    <Box>
      <Banner />
      <BestService />
      <About />
      <NotFound></NotFound>
      <ServiceCards />
      <Booking></Booking>
      <PersonalFlight />
      <TourPackages />
      <Testimonials />
    </Box>
  );
};

export default Home;
