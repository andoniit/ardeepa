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
import Wiwo1 from './components/projects/wiwo1';
import Wiwo2 from './components/projects/wiwo2';
import Wiwo3 from './components/projects/wiwo3';
import { AnimatePresence } from 'framer-motion';

import Click from "./components/ClickSpark"

import ReactGA from "react-ga4";
const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(!sessionStorage.getItem('preloaderShown')); // State for preloader
  ReactGA.initialize("G-2LL0NLDS0H");
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
    <>
    

<Click/>
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
        <Route path="/wiwo1" element={<Wiwo1 />} />
        <Route path="/wiwo2" element={<Wiwo2 />} />
        <Route path="/wiwo3" element={<Wiwo3 />} />
      </Routes>
      </AnimatePresence>
      <Footer />
    
    </ParallaxProvider>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    
    <App />
    
  </Router>
);

export default AppWrapper;