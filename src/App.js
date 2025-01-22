import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './components/Footer';
import Preloader from './components/Preloader'; 
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Pro1 from './components/projects/Pro1';
import Pro2 from './components/projects/Pro2';
import Pro3 from './components/projects/Pro3';
import Pro4 from './components/projects/Pro4';
import Pro5 from './components/projects/Pro5';
import Pro6 from './components/projects/Pro6';
import Pro7 from './components/projects/Pro7';
import Pro8 from './components/projects/Pro8';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(!sessionStorage.getItem('preloaderShown')); // State for preloader

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false); // Stop showing preloader
        sessionStorage.setItem('preloaderShown', 'true'); // Mark preloader as shown
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return <Preloader />; // Show Preloader if `loading` is true
  }

  return (
    <ParallaxProvider>
      <AnimatePresence mode='wait'>
      
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pro1" element={<Pro1 />} />
        <Route path="/pro2" element={<Pro2 />} />
        <Route path="/pro3" element={<Pro3 />} />
        <Route path="/pro4" element={<Pro4 />} />
        <Route path="/pro5" element={<Pro5 />} />
        <Route path="/pro6" element={<Pro6 />} />
        <Route path="/pro7" element={<Pro7 />} />
        <Route path="/pro8" element={<Pro8 />} />
      </Routes>
      </AnimatePresence>
      <Footer />
      
    </ParallaxProvider>
  );
};

const AppWrapper = () => (
  <Router>
    
    <App />
    
  </Router>
);

export default AppWrapper;