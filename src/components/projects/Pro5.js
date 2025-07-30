import React, { useState } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"


import projectImage from "../pro-5/2.jpg";
import projectImage1 from "../pro-5/3.jpg";
import projectImage2 from "../pro-5/4.jpg";
import projectImage3 from "../pro-5/5.jpg";
import projectImage4 from "../pro-5/6.jpg";
import projectImage5 from "../pro-5/7.jpg";
import projectImage6 from "../pro-5/8.jpg";
import projectImage7 from "../pro-5/9.jpg";
import projectImage8 from "../pro-5/10.jpg";
import projectImage9 from "../pro-5/11.jpg";
import projectImage10 from "../pro-5/12.jpg";
import projectImage11 from "../pro-5/13.jpg";
import projectImage12 from "../pro-5/14.jpg";
import projectImage13 from "../pro-5/15.jpg";
import projectImage14 from "../pro-5/16.jpg";
import projectImage15 from "../pro-5/17.jpg";
import projectImage16 from "../pro-5/18.jpg";






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
            <h1>05</h1>
            <div className="project1-year">
              <p>SPRING 2023</p>
              <span>A MULTICUISINE RESTAURANT 
</span>
              <span>PROJECT TYPE: LIVE PROJECT</span>
              <span>MENTOR: MADHURI GULABANI
</span>
<span>LOCATION: INDIA
</span>
<span>TEAM MEMBERS: AISHWARYA, SIMRAN 
</span>
              
            </div>
            
          </div>
          
          <div className="project1-details">
            
            <h2>Backyard Reawakening</h2>
            <p className="cover-description">
           
The restaurant has been revitalized through a thoughtful renovation that transforms its once-neglected backyard into the focal point of space. This area now features an open-air courtyard with outdoor seating, framed by multiple fine dining zones—including dedicated family seating, a smoking area, a bar counter, and a striking spiral staircase. A pergola with integrated glass elements provides a cohesive connection between these spaces. The spiral staircase leads to the first floor, which is exclusively designed for family dining.

            </p>
            
          </div>
        </div>
      </div>
      

      {/* New Section: Image and Description */}
      <div className="intro4">
          
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
          <ZoomImage
            src={projectImage7}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <ZoomImage
            src={projectImage8}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <ZoomImage
            src={projectImage9}
            alt="Formula One Grand Prix Race Circuit"
            
          />
           <ZoomImage
            src={projectImage10}
            alt="Formula One Grand Prix Race Circuit"
            
          /> <ZoomImage
            src={projectImage11}
            alt="Formula One Grand Prix Race Circuit"
            
          /> <ZoomImage
            src={projectImage12}
            alt="Formula One Grand Prix Race Circuit"
            
          /> <ZoomImage
            src={projectImage13}
            alt="Formula One Grand Prix Race Circuit"
            
          /> <ZoomImage
            src={projectImage14}
            alt="Formula One Grand Prix Race Circuit"
            
          /> <ZoomImage
            src={projectImage15}
            alt="Formula One Grand Prix Race Circuit"
            
          />
           <ZoomImage
            src={projectImage16}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          
          <div class="button-section">
  
            <a class="left-link" href="/pro4">
            <span class="left-link__arrow">
            <span></span>
            <span></span>
            </span>
            <span class="left-link__line"></span>
            <span class="left-link__text">Previous Project</span>
            </a>

  
            <a class="center-link" href="/projects#projects-section">All Projects</a>

  
            <a class="right-link" href="/pro6">
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