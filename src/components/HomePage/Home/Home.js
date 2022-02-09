import { Box } from "@mui/material";
import React from "react";
import TourPackages from "../../TourPackages/TourPackages";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import Testimonials from "../Testimonial/Testimonials/Testimonials";

const Home = () => {
  return (
    <Box>
      <Banner />
      <BestService />
      <About />
      <ServiceCards />
      <Testimonials />
      <ServiceCards></ServiceCards>
      <TourPackages />
      <Testimonials />
    </Box>
  );
};

export default Home;
