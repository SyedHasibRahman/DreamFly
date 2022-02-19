import { Box } from "@mui/material";
import React from "react";
import TourPackages from "../../Shared/TourPackages/TourPackages";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import Testimonials from "../Testimonial/Testimonials/Testimonials";
import PersonalFlight from "../PersonalFlight/PersonalFlight";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import UserCourse from "../../Dashboard/User/UserCourse/UserCourse";




const Home = () => {
  return (
    <Box>
      <Navigation />
      <Banner />
      {/* <Booking></Booking> */}
      <UserCourse></UserCourse>
      <BestService />
      <About />
      <ServiceCards />
      <TourPackages />

      <PersonalFlight />
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default Home;
