import React, { useState,useEffect } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"


import projectImage1 from "../pro-6/2.jpg";
import projectImage2 from "../pro-6/3.jpg";
import projectImage3 from "../pro-6/4.jpg";
import projectImage4 from "../pro-6/5.jpg";
import projectImage5 from "../pro-6/6.jpg";
import projectImage6 from "../pro-6/7.jpg";
import projectImage7 from "../pro-6/8.jpg";
import projectImage8 from "../pro-6/9.png";






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
            <h1>06</h1>
            <div className="project1-year">
              <p>FALL 2023</p>
              <span>INTEGRATED CONVENTION AND MOBILITY HUB
</span>
              <span>PROJECT TYPE: LIVE PROJECT</span>
              <span>MENTOR: MADHURI GULABANI</span>
              <span>LOCATION: INDIA</span>
              <span>TEAM MEMBERS: AISHWARYA, SIMRAN</span>


            </div>
          </div>
          <div className="project1-details">
            <h2>
HILLTOP CULTURAL SPINE
</h2>
            <p className="cover-description">
              Located at a historic hill station frequented by tourists, this government-led infrastructure project revitalizes the region with an integrated civic and cultural complex. Addressing the lack of accessibility and amenities, the project introduces a convention center featuring hospitality suites, fine dining, conference halls, exhibition spaces, artisan markets, and public gathering areas. A funicular railway system connects the lower town to the hilltop, offering seamless transport for all age groups. Complemented by electric buggies and scenic stopovers through forests, lakes, and temples, the design enhances both mobility and cultural experience, while promoting local heritage and sustainable tourism.

            </p>
          </div>
        </div>
      </div>

      {/* New Section: Image and Description */}
      
          <div className="intro5">
          
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
          
          <div class="button-section">
  
            <a class="left-link" href="/pro5">
            <span class="left-link__arrow">
            <span></span>
            <span></span>
            </span>
            <span class="left-link__line"></span>
            <span class="left-link__text">Previous Project</span>
            </a>

  
            <a class="center-link" href="/projects#projects-section">All Projects</a>

  
            <a class="right-link" href="/pro7">
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