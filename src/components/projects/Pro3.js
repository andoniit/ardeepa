import React, { useState } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"


import projectImage from "../pro-3/2.jpg";
import projectImage1 from "../pro-3/3.jpg";
import projectImage2 from "../pro-3/4.jpg";
import projectImage4 from "../pro-3/5.jpg";
import projectImage5 from "../pro-3/6.jpg";
import projectImage6 from "../pro-3/7.jpg";


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
            <h1>03</h1>
            <div className="project1-year">
              <p>SPRING 2025</p>
              <span>PARAMETRIC PAVILION FOR PUBLIC ENGAGEMENT </span>
              <span>PROJECT TYPE-INDEPENDENT DESIGN RESEARCH</span>
              <span>LOCATION-CHICAGO</span>
            </div>
            
          </div>
          
          <div className="project1-details">
            
            <h2>URBAN CANOPY</h2>
            <p className="cover-description">
            Urban Canopy” is a parametric pavilion designed as a central gathering space within a busy urban context. Nestled within a garden-like plaza, this lightweight structure offers a dynamic environment where people can socialize, relax, or enjoy a coffee beside a central fountain. The form and pattern of the pavilion were developed using advanced parametric design tools in Grasshopper, including Lunchbox, Ngon, Weaverbird, and Paneling Tools. Environmental performance, solar exposure, and comfort analysis were integrated using Ladybug, ensuring a climate-responsive design that enhances user experience. The pavilion exemplifies the fusion of computation, form-finding, and public space programming to foster community interaction in dense cityscapes.

            </p>
            
          </div>
        </div>
      </div>
      

      {/* New Section: Image and Description */}

      <div className="intro2">
          
          </div>
      <div className="project1-extra-section">
      
        <div className="project1-image">
          
          
          <ZoomImage
            src={projectImage}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          




          <ZoomImage
            src={projectImage1}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          



            <ZoomImage
            src={projectImage2}
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
          <ZoomImage
            src={projectImage6}
            alt="Formula One Grand Prix Race Circuit"
            
          />
         
          
          <div class="button-section">
  
            <a class="left-link" href="/pro2">
            <span class="left-link__arrow">
            <span></span>
            <span></span>
            </span>
            <span class="left-link__line"></span>
            <span class="left-link__text">Previous Project</span>
            </a>

  
            <a class="center-link" href="/projects#projects-section">All Projects</a>

  
            <a class="right-link" href="/pro4">
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