import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home/Home";
import Blogs from "./components/Pages/Blogs/Blogs/Blogs";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import OurPilots from "./components/Pages/OurPilots/OurPilots/OurPilots";
import Services from "./components/Pages/Services/Services/Services";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./components/Pages/Login/OtherRoutes/PrivateRoute/PrivateRoute";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";
import NotFound from "./components/Pages/NotFound/NotFound";
import BlogDetails from "./components/Pages/Blogs/BlogDetails/BlogDetails";
import AddPost from "./components/Dashboard/Admin/Add/AddPost";
import AboutUs from "./components/Pages/AboutUs/AboutUs/AboutUs";
import OurCoursesDetails from "./components/Pages/OurCourses/OurCoursesDetails/OurCoursesDetails";
import OurCourses from "./components/Pages/OurCourses/OurCourses";
import SignUp from "./components/Pages/Login/SignUp/SignUp";
import SignInSide from "./components/Pages/Login/SignIn/SignInSide";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* <Link to="/SingUp">SingUp</Link>
        <Link to="/SignIn">SignIn</Link> */}
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="OurPilots" element={<OurPilots />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/OurCoursesDetails" element={<OurCoursesDetails />} />
          <Route path="/OurCourses" element={<OurCourses />} />
          <Route path="SignIn" element={<SignInSide />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route
            path="Dashboard"
            element={
              <PrivateRoute>
                <Sidebar />
              </PrivateRoute>
            }
          >
            <Route path="AddPost" element={<AddPost />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
      {/* <AuthProvider>
        <Routes>
          <Route path="/Dashboard/" element={ <PrivateRoute><Sidebar /></PrivateRoute> } ></Route>
        </Routes>
      </AuthProvider> */}
    </div>
  );
}

export default App;
