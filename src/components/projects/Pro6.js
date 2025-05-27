import React, { useState,useEffect } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"


import projectImage1 from "../pro-6/1.webp";
import projectImage2 from "../pro-6/2.webp";
import projectImage3 from "../pro-6/3.webp";
import projectImage4 from "../pro-6/4.webp";
import projectImage5 from "../pro-6/5.webp";
import projectImage6 from "../pro-6/6.webp";





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
              <p>2020</p>
              <span>Co - housing  community</span>
              <span>Location : Belgaum, India</span>
            </div>
          </div>
          <div className="project1-details">
            <h2>Home - Square group project</h2>
            <p className="cover-description">
              A Co-housing community is an midrise apartment building which consist of an basement for parking, commercial units and residential units. The units are managed with only one duct in the centre which withholds the services of bath units and all the programs are on the periphery with a lot of sunlight and natural ventilation.
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
            src={projectImage4}
            alt="Formula One Grand Prix Race Circuit"
            
          /><ZoomImage
            src={projectImage5}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <ZoomImage
            src={projectImage6}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <ZoomImage
            src={projectImage3}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <ZoomImage
            src={projectImage2}
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

  
            
            </div>
          
         
          
        </div>
        
       
      </div>

      
      <ProgressCircle />
      </motion.div>
    </div>
  );
};

export default Tra(Project1);