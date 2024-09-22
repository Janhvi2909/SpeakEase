import LearnMore from './LearnMore';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './HeroSection'
import SignupPage from './SignUpPage'
import Home from './home';
import Practice from './practise';


function Main() {
    return (

      <Router>
        <Routes>
          {/* Route for the HeroSection (default path) */}
          <Route path="/" element={<HeroSection />} />
  
          {/* Route for the SignupPage */}
          <Route path="/signup" element={<SignupPage />} />

          {/* Route for the LearnMore Page */}
        <Route path="/learnmore" element={<LearnMore />} />

        {/* Route for the Home Page after login */}
        <Route path="/home" element={<Home />} />  {/* Add this line */}

        <Route path="/practice" element={<Practice />} />

        </Routes>
      </Router>
    );
  }
export default Main

  {/* <div className='relative flex justify-between h-screen'>
     <LeftNavbar/>
     <RightNavBar/>
     </div> */}