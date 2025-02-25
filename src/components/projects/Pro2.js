import React, { useState } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"

import projectImage from "../pro-2/1_2-2.webp";
import projectImage1 from "../pro-2/1_3-2.webp";
import projectImage2 from "../pro-2/1_4-3.webp";
import projectImage3 from "../pro-2/1_5-2.webp";
import projectImage4 from "../pro-2/1_6-2.webp";
import projectImage5 from "../pro-2/1_7-2.webp";
import projectImage6 from "../pro-2/1_8.webp";








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
              <p>2023</p>
              <span>Internship project</span>
              <span>Location : Belgaum, India</span>
            </div>
          </div>
          <div className="project1-details">
            <h2>The</h2>
            <h2>Backyard Revival</h2>
            <p className="cover-description">
            The restaurant has undergone renovations, transforming its previously abandoned backyard into its most significant feature. The backyard now boasts an open courtyard with outdoor seating, surrounded by various fine dining areas, including a family seating section, a smoking area, a bar counter, and a spiral staircase. A pergola with glass elements seamlessly connects these spaces. The spiral staircase leads to the first floor, which is dedicated to family dining.
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
          <ZoomImage
            src={projectImage6}
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