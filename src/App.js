import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
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
import UserOrder from "./components/Dashboard/User/UserOrder/UserOrder";
import UserProfile from "./components/Dashboard/User/UserProfile/UserProfile";
import ManageUsers from "./components/Dashboard/Admin/AdminPanel/ManageUsers/ManageUsers/ManageUsers";
import Payment from "./components/Dashboard/Payment/Payment";
import TourDetails from "./components/Shared/TourPackages/TourDetails/TourDetails";
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
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import BookDetails from "./components/Services/Book/BookDetails";
import SeaechFlightDetails from "./components/HomePage/PersonalFlight/SearchFlights/SeaechFlightDetails";
import TeamDetails from "./components/Pages/AboutUs/OurTeam/TeamDetails/TeamDetails";
import CourseEnroll from "./components/Pages/OurCourses/OurCoursesDetails/CourseEnroll/CourseEnroll";
import ManageBlogs from "./components/Dashboard/Admin/Blog/DeleteBlog/ManageBlogs";
import PriceChart from "./components/Dashboard/Admin/Chart/PriceChart/PriceChart";
import PaymentCard from "./components/Dashboard/Payment/PaymentCard/PaymentCard";



function App() {
  return (
    <div className="App">
      <AuthProvider>
      
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="Home" element={ <Home /> } />
          <Route path="Services" element={ <Services /> } />
          <Route path="PaymentCard" element={ <PaymentCard/> } />
          <Route path="About" element={ <AboutUs /> } />
          <Route path="TeamDetails/:teamId" element={ <TeamDetails /> } />
          <Route path="Pilots" element={ <OurPilots /> } />
          <Route path="SeaechFlightDetails/:SeaechId" element={ <SeaechFlightDetails /> } />
          <Route path="SearchFlight" element={ <SearchFlights /> } />
          <Route path="Contact" element={ <ContactUs /> } />
          <Route path="Blogs" element={ <Blogs /> } />
          <Route path="/blogs/:blogId" element={ <BlogDetails /> } />
          <Route path="/CoursesDetails" element={ <OurCoursesDetails /> } />
          <Route path="/Courses" element={ <OurCourses /> } />
          <Route path="Courses/:courseId" element={ <CourseEnroll /> } />
          <Route path="/TourPackages" element={ <TourPackages /> } />
          <Route path="/TourPackages/:TourId" element={ <TourDetails /> } />
          <Route path="/Book/:BookId" element={ <BookDetails /> } />
          {/* <Route path="/payment/" element={ <Payment /> } /> */ }
          <Route path="SignIn" element={ <SignInSide /> } />
          <Route path="SignUp" element={ <SignUp /> } />
          <Route
            path="Dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/Dashboard" element={ <UserProfile /> } />
            <Route path="UserOrder" element={ <UserOrder /> } />
            <Route path="payment/:bookedId" element={ <Payment /> } />
            <Route path="UserCourse" element={ <UserCourse /> } />
            <Route path="CouserDetails" element={ <CouserDetails /> } />
            <Route path="invoice/:bookedId" element={ <Invoice /> } />
            <Route path="Dashboard/:userId" element={ <UserProfile /> } />
          </Route>
          <Route
            path="Dashboard"
            element={
              <AdminRoute>
                <Dashboard />

              </AdminRoute>
            }
          >
            <Route path="/Dashboard" element={ <UserProfile /> } />
            <Route path="PriceChart" element={ <PriceChart /> } />
            <Route path="AddBlog" element={ <AddBlog /> } />
            <Route path="AddFlight" element={ <ManageFlight /> } />
            <Route path="ManageUsers" element={ <ManageUsers /> } />
            <Route path="UpdateBlog/:id" element={ <UpdateBlog /> } />
            <Route path="ManageBlog" element={ <ManageBlogs /> } />
            <Route path="MakeAdmin" element={ <MakeAdmin /> } />
            <Route path="AddPackage" element={ <ManagePackage /> } />
            <Route path="ManageOrders" element={ <ManageOrders /> } />
            <Route path="UpdatePackage/:id" element={ <UpadatePackage /> } />
            <Route path="ManagePackages" element={ <CustomizePackages /> } />
          </Route>
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      
      </AuthProvider>
    </div>
  );
}

export default App;
