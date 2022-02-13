import { Box } from "@mui/material";
import React from "react";
import TourPackages from "../../Shared/TourPackages/TourPackages";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import Testimonials from "../Testimonial/Testimonials/Testimonials";
import PersonalFlight from "../PersonalFlight/PersonalFlight";
import OurCourses from "../../Pages/OurCourses/OurCourses";

const Home = () => {
  return (
    <Box>
      <Banner />
      <BestService />
      <About />
      <ServiceCards></ServiceCards>
      <PersonalFlight />
      <TourPackages />
      <Testimonials />
      <OurCourses />
      <Footer />
    </Box>
  );
};

export default Home;
