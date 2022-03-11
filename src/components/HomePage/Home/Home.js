import React from "react";
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
import MessengerLive from "../../MessengerLive/MessengerLive";


const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <MessengerLive />
      {/* <Booking></Booking> */}
      {/* <UserCourse></UserCourse> */}
      {/* <CouserDetails></CouserDetails> */}
      {/* <MakeAdmin></MakeAdmin> */}
      {/* <ManagePackage></ManagePackage> */}
      {/* <ManageOrders></ManageOrders> */}
      <About />
      <BestService />
      <TourPackages />
      <ServiceCards />
      <PersonalFlight />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
