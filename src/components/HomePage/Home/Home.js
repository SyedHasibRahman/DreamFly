import React from "react";
import TourPackages from "../../TourPackages/TourPackages";
import About from "../About/About";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";

const Home = () => {
  return (
    <div>
      <BestService />
      <About />
      <ServiceCards></ServiceCards>
      <TourPackages />
    </div>
  );
};

export default Home;
