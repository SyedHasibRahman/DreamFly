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
import AboutUs from "./components/Pages/AboutUs/AboutUs/AboutUs";
import OurCoursesDetails from "./components/Pages/OurCourses/OurCoursesDetails/OurCoursesDetails";
import OurCourses from "./components/Pages/OurCourses/OurCourses";
import SignUp from "./components/Pages/Login/SignUp/SignUp";
import SignInSide from "./components/Pages/Login/SignIn/SignInSide";
import AdminPanel from "./components/Dashboard/Admin/AdminPanel/AdminPanel";
import UserOrder from "./components/Dashboard/User/UserOrder/UserOrder";
import UserProfile from "./components/Dashboard/User/UserProfile/UserProfile";
import ManageUsers from "./components/Dashboard/Admin/AdminPanel/ManageUsers/ManageUsers/ManageUsers";
import Payment from "./components/Dashboard/Payment/Payment";
import TourDetails from "./components/Shared/TourPackages/TourDetails/TourDetails";
import DeleteBlog from "./components/Dashboard/Admin/Blog/DeleteBlog/DeleteBlog";
import UpdateBlog from "./components/Dashboard/Admin/Blog/UpdateBlog/UpdateBlog";
import AddBlog from "./components/Dashboard/Admin/Blog/AddBlog/AddBlog";
import TourPackages from "./components/Shared/TourPackages/TourPackages/TourPackages";
import SearchFlights from "./components/HomePage/PersonalFlight/SearchFlights/SearchFlights";
import ManageFlight from "./components/Dashboard/Admin/ManageFlight/ManageFlight";
import MakeAdmin from "./components/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManagePackage from "./components/Dashboard/Admin/ManagePackage/ManagePackage";
import ManageOrders from "./components/Dashboard/Admin/ManageOrder/ManageOrders";
import UserCourse from "./components/Dashboard/User/UserCourse/UserCourse";
import CouserDetails from "./components/Dashboard/User/UserCourse/CouserDetails/CouserDetails";
import AdminRoute from "./components/Pages/Login/OtherRoutes/AdminRoute/AdminRoute";
import UpadatePackage from "./components/Dashboard/Admin/CustomizePackage/UpadatePackage/UpadatePackage";
import CustomizePackages from "./components/Dashboard/Admin/CustomizePackage/CustomizePackages/CustomizePackages";
import Invoice from "./components/Dashboard/Payment/Invoice";
import UpdateService from "./components/Dashboard/Admin/ManageService/UpdateService/UpdateService";
import ServiceDetail from "./components/Pages/Services/ServiceDetail/ServiceDetail";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="Home" element={ <Home /> } />
          <Route path="Services" element={ <Services /> } />
          <Route path="/Services/:serviceId" element={ <ServiceDetail /> } />
          <Route path="About" element={ <AboutUs /> } />
          <Route path="Pilots" element={ <OurPilots /> } />
          <Route path="SearchFlight" element={ <SearchFlights /> } />
          <Route path="Contact" element={ <ContactUs /> } />
          <Route path="Blogs" element={ <Blogs /> } />
          <Route path="/blogs/:blogId" element={ <BlogDetails /> } />
          <Route path="/CoursesDetails" element={ <OurCoursesDetails /> } />
          <Route path="/Courses" element={ <OurCourses /> } />
          <Route path="/TourPackages" element={ <TourPackages /> } />
          <Route path="/TourPackages/:TourId" element={ <TourDetails /> } />
          {/* <Route path="/payment/" element={ <Payment /> } /> */ }
          <Route path="SignIn" element={ <SignInSide /> } />
          <Route path="SignUp" element={ <SignUp /> } />
          <Route
            path="Dashboard"
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }
          >
            <Route path="AddBlog" element={<AddBlog />} />

            <Route path="UserOrder" element={<UserOrder />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="ManageUsers" element={<ManageUsers />} />
            {/* <Route path="payment/" element={ <Payment /> } /> */}
            <Route path="payment/:bookedId" element={<Payment />} />
            <Route path="UpdateBlog/:id" element={<UpdateBlog />} />
            <Route path="DeleteBlog" element={<DeleteBlog />} />
            <Route path="MakeAdmin" element={<MakeAdmin />} />
            <Route path="ManagePackage" element={<ManagePackage />} />
            <Route path="ManageOrders" element={<ManageOrders />} />
            <Route path="UserCourse" element={<UserCourse />} />
            <Route path="CouserDetails" element={<CouserDetails />} />
            <Route path="CustomizePackages" element={<CustomizePackages />} />
            <Route path="UpdatePackage/:id" element={<UpdateService  />} />
            <Route path="UpdateService/:id" element={<UpdateService />} />

            <Route path="UserOrder" element={<UserOrder />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="ManageUsers" element={<ManageUsers />} />
            {/* <Route path="payment/" element={ <Payment /> } /> */}
            <Route path="payment/:bookedId" element={<Payment />} />
            <Route path="invoice/:bookedId" element={<Invoice />} />
            <Route path="UpdateBlog/:id" element={<UpdateBlog />} />
            <Route path="DeleteBlog" element={<DeleteBlog />} />
            <Route path="MakeAdmin" element={<MakeAdmin />} />
            <Route path="ManagePackage" element={<ManagePackage />} />
            <Route path="ManageOrders" element={<ManageOrders />} />
            <Route path="UserCourse" element={<UserCourse />} />
            <Route path="CouserDetails" element={<CouserDetails />} />
          </Route>
          <Route
            path="Dashboard"
            element={
              <AdminRoute>
                <AdminPanel />

              </AdminRoute>
            }
          >
            <Route path="ManageFlight" element={<ManageFlight />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </div>
  );
}

export default App;
