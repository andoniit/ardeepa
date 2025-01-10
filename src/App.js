import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CSSTransition, SwitchTransition } from "react-transition-group";

import Footer from './components/Footer';
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

import { ParallaxProvider } from 'react-scroll-parallax';


const App = () => {
    const location = useLocation();
  

    return (
        
      <ParallaxProvider>
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
            <Footer/>
            </ParallaxProvider>
           
    );
};

const AppWrapper = () => (
    <Router>
        
      <App />
      
    </Router>
  );
  
  export default AppWrapper;