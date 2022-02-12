import { Box } from "@mui/material";
import React from "react";
import TourPackages from "../../TourPackages/TourPackages";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import Testimonials from "../Testimonial/Testimonials/Testimonials";
import PersonalFlight from "../PersonalFlight/PersonalFlight";

const Home = () => {
  return (
    <Box>
      <Navigation></Navigation>
      <Banner />
      <BestService />
      <About />
      <ServiceCards></ServiceCards>
      <PersonalFlight />
      <Testimonials />
      <TourPackages />
    </Box>
  );
};

export default Home;
