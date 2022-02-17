import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home/Home';
import SignInSide from './components/Pages/Login/SingIn/SignInSide';
import SingUp from './components/Pages/Login/SingUp/SingUp';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Blogs from './components/Pages/Blogs/Blogs/Blogs';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import OurPilots from './components/Pages/OurPilots/OurPilots/OurPilots';
import Services from './components/Pages/Services/Services/Services';
import Navigation from './components/Shared/Navigation/Navigation';
import Footer from './components/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Pages/Login/OtherRoutes/PrivateRoute/PrivateRoute';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import NotFound from './components/Pages/NotFound/NotFound';
import AddPost from './components/Dashboard/Admin/AddPost/AddPost';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* <Link to="/SingUp">SingUp</Link>
        <Link to="/SignIn">SignIn</Link> */}
        {/* <Navigation /> */ }
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="Home" element={ <Home /> } />
          <Route path="Services" element={ <Services /> } />
          <Route path="aboutus" element={ <AboutUs /> } />
          <Route path="OurPilots" element={ <OurPilots /> } />
          <Route path="ContactUs" element={ <ContactUs /> } />
          <Route path="Blogs" element={ <PrivateRoute><Blogs /></PrivateRoute> } />
          <Route path="SignIn" element={ <SignInSide /> } />
          <Route path="SingUp" element={ <SingUp /> } />
          <Route path="Dashboard" element={ <PrivateRoute><Sidebar /></PrivateRoute> } >
            <Route path="AddPost" element={ <AddPost /> } />
          </Route>
          <Route path="*" element={ <NotFound /> } />
        </Routes>
        {/* <Footer /> */ }



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
