import React, { useState } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"



import projectImage1 from "../pro-4/2.jpg";
import projectImage2 from "../pro-4/3.jpg";
import projectImage3 from "../pro-4/4.jpg";
import projectImage4 from "../pro-4/5.jpg";
import projectImage5 from "../pro-4/6.jpg";



import  { useEffect } from "react";

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
    
    <div>
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
            <h1>04</h1>
            <div className="project1-year">
              <p>SPRING 2025</p>
              <span>ARCHITECTURAL STRATEGIES FOR SUPPORTING AUTISTIC STUDENTS
</span>
              <span>PROJECT TYPE: MASTERS RESEARCH</span>
              <span>MENTOR: VEDRAN MIMICA, JONATHAN MILLER
</span>
<span>LOCATION: CHICAGO
</span>
              
            </div>
            
          </div>
          
          <div className="project1-details">
            
            <h2>NEURODIVERSE</h2>
            <h2>
FRIENDLY UNIVERSITY SPACES
            </h2>
            <p className="cover-description">
            
            </p>
            
          </div>
        </div>
      </div>
      

      {/* New Section: Image and Description */}
      <div className="intro3">
          
          </div>
      <div className="project1-extra-section">
      
        <div className="project1-image">
          
          
          <ZoomImage
            src={projectImage1}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          




          <ZoomImage
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
            
          />
          <ZoomImage
            src={projectImage5}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          
          
          <div class="button-section">
  
            <a class="left-link" href="/pro3">
            <span class="left-link__arrow">
            <span></span>
            <span></span>
            </span>
            <span class="left-link__line"></span>
            <span class="left-link__text">Previous Project</span>
            </a>

  
            <a class="center-link" href="/projects#projects-section">All Projects</a>

  
            <a class="right-link" href="/pro5">
            <span class="right-link__text">Next Project</span>
            <span class="right-link__line"></span>
            <span class="right-link__arrow">
            <span></span>
            <span></span>
            </span>
            </a>
            </div>
          </div>
        
       
      </div>
      </motion.div>
      <ProgressCircle />
    </div>
  );
};

export default Tra(Project1);