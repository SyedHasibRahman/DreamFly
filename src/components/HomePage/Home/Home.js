import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import Testimonials from "../Testimonial/Testimonials/Testimonials";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import PersonalFlight from "../PersonalFlight/PersonalFlight/PersonalFlight";
import TourPackages from "../../Shared/TourPackages/TourPackages/TourPackages";
import CounterArea from "../../Pages/AboutUs/CounterArea/CounterArea";
import { Box, Container } from "@mui/material";



const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <BestService />
      <About />
      <ServiceCards />
      <CounterArea/>
      <Box className="marginY90">
        <Container>
          <PersonalFlight sx={{borderRadius: "15px !important"}}/>
        </Container>
      </Box>
      <TourPackages />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
