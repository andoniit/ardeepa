import React, { useState,useEffect } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"


import projectImage1 from "../pro-8/2.jpg";
import projectImage2 from "../pro-8/3.jpg";
import projectImage3 from "../pro-8/4.jpg";






import ReactGA from "react-ga";
import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';

import gsap from "gsap";
const TRACKING_ID = "G-2LL0NLDS0H";
function usePageViews() {
  let location = useLocation();
  useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

const Project1 = () => {
  

  return (
    <div className="body-p">
      <Navbar />
      <motion.div
      className="projects-page"
      initial={{ opacity: 0, y: 50 }} // Start off-screen and faded
      animate={{ opacity: 1, y: 0 }} // Move to its normal position
      exit={{ opacity: 0, y: -50 }} // Exit upward with fade
      transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
    >
      {/* Hero Section */}
      <div className="project1-hero">
        
        <div className="project1-hero-content">
          <div className="project1-header">
            <h1>08</h1>
            <div className="project1-year">
              <p>SPRING 2022</p>
              <span>IMMERSIVE GEODESIC RETREATS BLENDING LUXURY, WILDERNESS AND SERENITY</span>
              <span>PROJECT TYPE: INTERNSHIP PROJECT</span>
              <span>MENTOR: MADHURI GULABANI
</span>
              <span>LOCATION: INDIA
</span>
              <span>TEAM MEMBERS: SIMRAN
</span>

            </div>
          </div>
          <div className="project1-details">
            <h2>WILDSCAPE DOMES
</h2>
            <p className="cover-description">
              Set within the heart of a forest, Wildscape Domes is a resort concept featuring modern geodesic structures that offer an immersive experience of nature without compromising comfort. Each dome is designed with a panoramic window placed directly opposite the bed, framing an uninterrupted view of the infinity pool merging into the wild landscape beyond. The layout and orientation enhance the guest’s connection to the outdoors while maintaining privacy and thermal comfort. The project balances eco-sensitive architecture with experiential luxury, offering a retreat that soothes and inspires.

            </p>
          </div>
        </div>
      </div>

      {/* New Section: Image and Description */}
      
          <div className="intro9">
          
          </div>
          <div className="project1-extra-section">
        <div className="project1-image">
          
          <ZoomImage
            src={projectImage1}
            alt="Formula One Grand Prix Race Circuit"
            
          /><ZoomImage
            src={projectImage2}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <ZoomImage
            src={projectImage3}
            alt="Formula One Grand Prix Race Circuit"
            
          />
         
        
          
          <div class="button-section">
  
            <a class="left-link" href="/pro7">
            <span class="left-link__arrow">
            <span></span>
            <span></span>
            </span>
            <span class="left-link__line"></span>
            <span class="left-link__text">Previous Project</span>
            </a>

  
            <a class="center-link" href="/projects#projects-section">All Projects</a>

  
            
            </div>
          
         
          
        </div>
        
       
      </div>

      
      <ProgressCircle />
      </motion.div>
    </div>
  );
};

export default Tra(Project1);