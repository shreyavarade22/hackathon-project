import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePages from './Webpages/Homepages';
// import AboutUs from './webpages/AboutUs';
// import Issues from './webpages/Issues';
// import Account from './webpages/Account';

// Import CSS (if you have global CSS files)
// import './App.css';
// import './HomePage.css'; // If you want to import here instead of in HomePage

function App() {
  return (
    <div className="App">
      <Routes>
          {/* Home Routes */}
          <Route path="/" element={<HomePages />} />
          <Route path="/home" element={<HomePages />} />
          
          {/* Other Routes - Uncomment when you create these pages */}
          {/* <Route path="/about-us" element={<AboutUs />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/account" element={<Account />} /> */}
          
          {/* Issues with category filter */}
          {/* <Route path="/issues" element={<Issues />}>
            <Route path="category/:category" element={<Issues />} />
          </Route> */}
          
          {/* Footer Links - Uncomment when you create these pages */}
          {/* <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/sitemap" element={<SiteMap />} /> */}
          
          {/* 404 Page - Catch all unmatched routes */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
  );
}

export default App;