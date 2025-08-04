import React, { useState,useEffect } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"


import projectImage1 from "../pro-9/1.jpg";
import projectImage2 from "../pro-9/2.jpg";
import projectImage3 from "../pro-9/3.jpg";
import projectImage4 from "../pro-9/4.jpg";
import projectImage5 from "../pro-9/5.jpg";







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
            <h1>09</h1>
            <div className="project1-year">
              <p>SPRING 2022
</p>
              <span>A SITE STUDY OF UDUPI, KARNATAKA
</span>
              <span>PROJECT TYPE: ACADEMIC, UNDERGRAD
</span>
              <span>MENTOR: PRASAD KULKARNI
</span>
              <span>LOCATION: INDIA
</span>
              

            </div>
          </div>
          <div className="project1-details">
            <h2>
URBAN REFLECTIONS 

</h2>
            <p className="cover-description">
              
This urban research project focused on Udupi, a coastal town in Karnataka widely recognized as the “Town of Temples.” Through in-person site visits and surveys, we studied the spatial evolution of the city, analyzing both historic and contemporary patterns of use, architecture, movement, and infrastructure. The project emphasized understanding how religion, culture, and coastal geography shaped the urban character of Udupi over time.<br></br><br></br>

By mapping built and social fabric, documenting user behaviors, and analyzing transformations at the architectural and urban scale, the study formed the basis for context-sensitive planning recommendations. Our work aimed to preserve the city’s identity while addressing the challenges of modern urban growth.<br></br><br></br>


            </p>
          </div>
        </div>
      </div>

      {/* New Section: Image and Description */}
      
          
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
         <ZoomImage
            src={projectImage4}
            alt="Formula One Grand Prix Race Circuit"
            
          /><ZoomImage
            src={projectImage5}
            alt="Formula One Grand Prix Race Circuit"
            
          />
        
          
          <div class="button-section">
  
            <a class="left-link" href="/pro8">
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