import React, { useState } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"


import projectImage from "../pro-5/p1.jpg";
import projectImage1 from "../pro-5/p2.jpg";
import projectImage2 from "../pro-5/p3.jpg";
import projectImage3 from "../pro-5/p4.jpg";
import projectImage4 from "../pro-5/p5.jpg";
import projectImage5 from "../pro-5/p6.jpg";
import projectImage6 from "../pro-5/p7.jpg";
import projectImage7 from "../pro-5/p8.jpg";
import projectImage8 from "../pro-5/p9.jpg";
import projectImage9 from "../pro-5/p10.jpg";





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
              <p>2024</p>
              <span>Internship project</span>
              <span>Location : Belgaum, India</span>
              
            </div>
            
          </div>
          
          <div className="project1-details">
            
            <h2>Backyard Reawakening</h2>
            <p className="cover-description">
            Originally, this backyard featured a central pool and a gazebo at the far end, but it was neglected because the pool's large size disrupted the spatial flow. In the new design, the pool has been relocated to one side, accompanied by a cascading water feature and spout. Opposite the pool, a statue of Buddha now stands before a small, circular lotus pond, lending a tranquil ambiance to the space.
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

  
            
            </div>
          </div>
        
       
      </div>
      </motion.div>
      <ProgressCircle />
    </div>
  );
};

export default Tra(Project1);