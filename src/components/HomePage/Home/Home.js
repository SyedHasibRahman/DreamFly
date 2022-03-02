import { Box } from "@mui/material";
import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import Testimonials from "../Testimonial/Testimonials/Testimonials";
import PersonalFlight from "../PersonalFlight/PersonalFlight";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import TourPackages from "../../Shared/TourPackages/TourPackages/TourPackages";






const Home = () => {
  return (
    <Box>
      <Navigation />
      <Banner />
      {/* <Booking></Booking> */}
      {/* <UserCourse></UserCourse> */}
      {/* <CouserDetails></CouserDetails> */}
      {/* <MakeAdmin></MakeAdmin> */}
      {/* <ManagePackage></ManagePackage> */}
      {/* <ManageOrders></ManageOrders> */}
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
