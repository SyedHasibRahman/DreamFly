import React from "react";
import About from "../About/About";
import BestService from "../BestService/BestService";
import ServiceCards from "../ServiceCard/ServiceCards/ServiceCards";
import ViewCounts from "../ViewCount/ViewCounts/ViewCounts";

const Home = () => {
    return (
        <div>
            <BestService />
            <About />
            <ServiceCards></ServiceCards>
            <ViewCounts></ViewCounts>
        </div>
    );
};

export default Home;
