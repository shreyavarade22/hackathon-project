import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePages from './Webpages/Homepages';
import AboutUs from './Webpages/AboutUs';
import Login from './Webpages/Login';
import Signup from './Webpages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home Routes */}
        <Route path="/" element={<HomePages />} />
        <Route path="/home" element={<HomePages />} />
        
        {/* About Us */}
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* Login & Signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* 404 Page - Catch all unmatched routes */}
        <Route path="*" element={<HomePages />} />
      </Routes>
    </div>
  );
}

export default App;
