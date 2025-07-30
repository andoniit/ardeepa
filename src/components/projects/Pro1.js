import React, { useState,useEffect } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"


import projectImage from "../pro-1/1.jpg";
import projectImage1 from "../pro-1/2.jpg";
import projectImage2 from "../pro-1/3.jpg";
import projectImage3 from "../pro-1/4.jpg";
import projectImage4 from "../pro-1/5.png";
import projectImage5 from "../pro-1/6.png";
import projectImage6 from "../pro-1/7.png";
import projectImage7 from "../pro-1/8.jpg";
import projectImage8 from "../pro-1/9.png";
import projectImage9 from "../pro-1/10.jpg";
import projectImage10 from "../pro-1/11.jpg";
import projectImage11 from "../pro-1/12.jpg";
import projectImage12 from "../pro-1/13.jpg";
import projectImage13 from "../pro-1/14.jpg";
import projectImage14 from "../pro-1/15.jpg";




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
            <h1>01</h1>
            <div className="project1-year">
              <p>Fall 2024</p>
              <span>PROJECT TYPE - ACADEMIC, MASTERS</span>
              <span>MENTOR - JOEL PUTNAM, HENRY HEGLISIUS</span>
              <span>LOCATION – CHICAGO</span>
            </div>
          </div>
          <div className="project1-details">
            <h2>F1 Grand Prix 
</h2>
            <h2>Grandstand & F1 Racetrack</h2>
            <p className="cover-description">
              The proposed Grand Prix circuit in Chicago is envisioned as a minimal-intervention, year-round multipurpose venue. Designed with adaptability at its core, the circuit transforms beyond race week into a vibrant public space for concerts, running, and community gatherings—maximizing its urban utility and public engagement.<br></br> <br></br>

To mitigate congestion and enhance accessibility, the location has been intentionally sited in Chicago’s northern periphery, away from the dense Loop. This decentralization approach not only eases traffic flow but also provides convenient access for visitors without channeling them through the city’s inner core.<br></br><br></br>

A spatial analysis using QGIS further informed the site selection, incorporating crime data—specifically homicide locations—to ensure the venue prioritizes public safety. This strategy supports a broader urban agenda: activating underutilized spaces, enhancing community safety, and revitalizing overlooked areas of the city through inclusive, large-scale civic events.<br></br>

            </p>
          </div>
        </div>
      </div>

      {/* New Section: Image and Description */}
      
          <div className="intro">
          
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
            
          />


<ZoomImage
            src={projectImage11}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <ZoomImage
            src={projectImage12}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <ZoomImage
            src={projectImage13}
            alt="Formula One Grand Prix Race Circuit"
            
          />
           <ZoomImage
            src={projectImage14}
            alt="Formula One Grand Prix Race Circuit"
            
          />
           
         <div class="button-section">
  
         

  
  <a class="center-link" href="/projects#projects-section">All Projects</a>

  
  <a class="right-link" href="/pro2">
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

      
      <ProgressCircle />
      </motion.div>
    </div>
  );
};

export default Tra(Project1);