import React, { useEffect } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import Testimonials from "../Testimonial/Testimonials/Testimonials";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
// import UserCourse from "../../Dashboard/User/UserCourse/UserCourse";
// import CouserDetails from "../../Dashboard/User/UserCourse/CouserDetails/CouserDetails";
// import MakeAdmin from "../../Dashboard/Admin/MakeAdmin/MakeAdmin";
// import ManagePackage from "../../Dashboard/Admin/ManagePackage/ManagePackage";
// import ManageOrders from "../../Dashboard/Admin/ManageOrder/ManageOrders";
// import ManageFlight from "../../Dashboard/Admin/ManageFlight/ManageFlight";
import PersonalFlight from "../PersonalFlight/PersonalFlight/PersonalFlight";
import TourPackages from "../../Shared/TourPackages/TourPackages/TourPackages";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" }, overflowX: "hidden" });
    let tl = gsap.timeline();
    tl.from(".banner_logo", 1.8, {
      opacity: 0,
      y: 50,
      ease: "power4.out",
      delay: 1,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".banner_img", 1.8, {
      opacity: 0,
      x: -250,
      scale: 0.1,
      ease: "power4.out",
      delay: 1.8,
    });
  }, []);
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".socialIcon", 1.8, {
      opacity: 0,
      x: -80,
      delay: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  }, []);
  return (
    <>
      <Navigation />
      <Banner />
      {/* <Booking></Booking> */}
      {/* <UserCourse></UserCourse> */}
      {/* <CouserDetails></CouserDetails> */}
      {/* <MakeAdmin></MakeAdmin> */}
      {/* <ManagePackage></ManagePackage> */}
      {/* <ManageOrders></ManageOrders> */}
      <About />
      <BestService />
      <ServiceCards />
      <TourPackages />
      <PersonalFlight />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
