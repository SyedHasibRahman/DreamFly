import { Box } from "@mui/material";
import React from "react";
import TourPackages from "../../Shared/TourPackages/TourPackages";
import Footer from "../../Shared/Footer/Footer";
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
      <TourPackages />
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default Home;
