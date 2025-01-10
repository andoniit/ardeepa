import React, { useState } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import backgroundImage from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/6.png";
import projectImage from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-2/1_2-2.webp";
import projectImage1 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-2/1_3-2.webp";
import projectImage2 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-2/1_4-3.webp";
import projectImage3 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-2/1_5-2.webp";
import projectImage4 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-2/1_6-2.webp";
import projectImage5 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-2/1_7-2.webp";
import projectImage6 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-2/1_8.webp";
import projectImage7 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/First floor_1_0.webp";
import projectImage8 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/Second floor_1.webp";
import projectImage9 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/fourth floor_1_1.webp";
import projectImage10 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/section_1_1.webp";
import projectImage11 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/perspective.webp";



import { motion, useSpring, useScroll } from "motion/react"

import ZoomImage from "../ZoomImage";





const Project1 = () => {
 


  return (
    <div>
      
      {/* Hero Section */}
      <div className="project1-hero">
        <Navbar />
        <div className="project1-hero-content">
          <div className="project1-header">
            <h1>02</h1>
            <div className="project1-year">
              <p>2023</p>
              <span>Masters 1st Term Project</span>
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

  
  <a class="center-link" href="/projects">All Projects</a>

  
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

      
    </div>
  );
};

export default Project1;