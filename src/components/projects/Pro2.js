import React, { useState } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"

import projectImage from "../pro-2/2.jpg";
import projectImage1 from "../pro-2/3.jpg";
import projectImage2 from "../pro-2/4.jpg";
import projectImage3 from "../pro-2/5.jpg";

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
            <h1>02</h1>
            <div className="project1-year">
              <p>WINTER 2024</p>
              <span>PROJECT TYPE-INDEPENDENT DESIGN RESEARCH</span>
              <span>LOCATION-CHICAGO</span>
            </div>
          </div>
          <div className="project1-details">
            <h2>PARAMETRIC SPIRES</h2>
            <p className="cover-description">
           This design research project explores the intersection of spirituality, mathematics, and verticality through the lens of sacred geometry. Using Python scripting within Rhino, I developed a series of parametric skyscraper forms rooted in ancient geometric systems—such as the Flower of Life, golden ratio, and Platonic solids—reinterpreted for a contemporary skyline.<br></br><br></br>
Design Intent<br></br><br></br>
The goal was to reinterpret ancient geometries—symbols often associated with harmony, balance, and cosmic order—and investigate how their proportions and embedded symmetries could inform new typologies for vertical architecture. This was not a stylistic application, but a structural and spatial rethinking of the skyscraper as a sacred form.<br></br><br></br>

            </p>
          </div>
        </div>
      </div>

      {/* New Section: Image and Description */}
      <div className="intro1">
          
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
            src={projectImage3}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          



          
          
          <div class="button-section">
  
         <a class="left-link" href="/pro1">
  <span class="left-link__arrow">
    <span></span>
    <span></span>
  </span>
  <span class="left-link__line"></span>
  <span class="left-link__text">Previous Project</span>
</a>

  
  <a class="center-link" href="/projects#projects-section">All Projects</a>

  
  <a class="right-link" href="/pro3">
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