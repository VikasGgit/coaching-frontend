// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Carosal from './components/CarosalSlider';
import SliderContainer from './components/sliderContainer';
import CourseList from './components/coursePage';
import Contact from './components/contact';
import FeeStructure from './components/Fees';

const App = () => {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <Contact/>
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-grow p-4">
            {/* Define Routes here */}
            <Routes>
              <Route path="/" element={
                <>
                  <SliderContainer />
                  <Carosal />
                </>
              } />
              <Route path="/course" element={<CourseList />} /> {/* Route for CourseList */}
              <Route path="/fee-structure" element={<FeeStructure />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
