import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home/Home";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Blogs from "./components/Pages/Blogs/Blogs/Blogs";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import OurCourses from "./components/Pages/OurCourses/OurCourses";
import OurPilots from "./components/Pages/OurPilots/OurPilots/OurPilots";
import Services from "./components/Pages/Services/Services/Services";
import Navigation from "./components/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Services" element={<Services />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="OurPilots" element={<OurPilots />} />
        <Route path="OurCourses" element={<OurCourses />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
