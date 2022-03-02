import { Box } from "@mui/material";
import React, { useEffect } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import Testimonials from "../Testimonial/Testimonials/Testimonials";
import PersonalFlight from "../PersonalFlight/PersonalFlight";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import UserCourse from "../../Dashboard/User/UserCourse/UserCourse";
import TourPackages from "../../Shared/TourPackages/TourPackages/TourPackages";
import CouserDetails from "../../Dashboard/User/UserCourse/CouserDetails/CouserDetails";
import MakeAdmin from "../../Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManagePackage from "../../Dashboard/Admin/ManagePackage/ManagePackage";
import ManageOrders from "../../Dashboard/Admin/ManageOrder/ManageOrders";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } });
    let tl = gsap.timeline();
    tl.from(".banner_img", 1.8, {
      opacity: 0,
      x: -200,
      scale: 0.1,
      ease: "power4.out",
      delay: 1.8,
      // stagger: {
      //   amount: 0.3,
      // },
    }).to(".overlyMain", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      stagger: 0.4,
    });
  }, []);
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
