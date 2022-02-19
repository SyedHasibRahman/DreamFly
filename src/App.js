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
import NotFound from "./components/Pages/NotFound/NotFound";
import BlogDetails from "./components/Pages/Blogs/BlogDetails/BlogDetails";
import AddPost from "./components/Dashboard/Admin/Add/AddPost";
import AboutUs from "./components/Pages/AboutUs/AboutUs/AboutUs";
import OurCoursesDetails from "./components/Pages/OurCourses/OurCoursesDetails/OurCoursesDetails";
import OurCourses from "./components/Pages/OurCourses/OurCourses";
import SignUp from "./components/Pages/Login/SignUp/SignUp";
import SignInSide from "./components/Pages/Login/SignIn/SignInSide";
import AdminPanel from "./components/Dashboard/Admin/AdminPanel/AdminPanel";
import UserOrder from "./components/Dashboard/User/UserOrder/UserOrder";
import UserProfile from "./components/Dashboard/User/UserProfile/UserProfile";
import ManageUsers from "./components/Dashboard/Admin/AdminPanel/ManageUsers/ManageUsers/ManageUsers";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
                <AdminPanel />
              </PrivateRoute>
            }
          >
            <Route path="AddPost" element={<AddPost />} />
            <Route path="UserOrder" element={<UserOrder />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="ManageUsers" element={<ManageUsers />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </div>
  );
}

export default App;
