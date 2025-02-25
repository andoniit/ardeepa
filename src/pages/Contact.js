import React, { useRef,useEffect } from "react";
import Navbar from "../components/Navbar.js";
import "./contact.css";
import Tra from "../components/tra.js"
import { motion, useTransform, useScroll } from "framer-motion";
import Lanyard from '../components/Lanyard.js'


import ReactGA from "react-ga";
import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';

const TRACKING_ID = "G-2LL0NLDS0H";
ReactGA.initialize(TRACKING_ID);

// Import the image
//import featuredImage from "../assets/12.jpg"; 
function usePageViews() {
  let location = useLocation();
  useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

const Contact = () => {
    return (
        <div>
          
          <motion.div
      className="projects-page"
      initial={{ opacity: 0, y: 50 }} // Start off-screen and faded
      animate={{ opacity: 1, y: 0 }} // Move to its normal position
      exit={{ opacity: 0, y: -50 }} // Exit upward with fade
      transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
    >
      
          
        <Navbar/>
        
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      <div className="contact-hero">
        
        <div className="contact-hero-left">
          
          <p className="contact-number">Lets connect .</p>
          <h1 className="contact-title">Contact.</h1>
          <div class="contact-cta">
  <a href="mailto:ddevangmath@hawk.iit.edu" class="email-link">Send an Email <br/>ddevangmath@hawk.iit.edu</a>
</div>
          
        </div>
        
        
        
        <div className="contact-hero-right">
          <div className="contact-featured">
            
          
            {/* <img
              src={featuredImage}
              alt="Contact Featured"
              className="contact-featured-image"
            /> */}
          </div>
          
        </div>
        
      </div>
      
      </motion.div>
      
      </div>
    );
  };
  
  export default Tra(Contact);