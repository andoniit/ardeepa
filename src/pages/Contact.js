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
  <br></br>
  <br></br>
  <button onClick={() => window.location.href = "https://www.linkedin.com/in/deepa-devangmath"}>
    <p>Linkedin</p>
    <svg viewBox="0 0 16 16" class="bi bi-whatsapp" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
    </svg>
</button>
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