import React, { useState,useEffect } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"



import projectImage1 from "../pro-7/2.jpg";
import projectImage2 from "../pro-7/3.jpg";
import projectImage3 from "../pro-7/4.jpg";
import projectImage4 from "../pro-7/5.jpg";
import projectImage5 from "../pro-7/6.jpg";
import projectImage6 from "../pro-7/7.jpg";





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
            <h1>07</h1>
            <div className="project1-year">
              <p>FALL 2023</p>
              <span>THE RESTORATIVE BACKYARD OASIS BLENDING TRANQUILITY, PLAY AND EVERYDAY GATHERING
</span>
              <span>PROJECT TYPE: LIVE PROJECT
</span>
<span>MENTOR: MADHURI GULABANI</span>
<span>LOCATION: INDIA
</span>
<span>TEAM MEMBERS: AISHWARYA, SIMRAN 
</span>
            </div>
          </div>
          <div className="project1-details">
            <h2>THE SERENITY COURTYARD
</h2>
            <p className="cover-description">
              As the lead intern on this renovation project, I transformed an abandoned backyard into a multifunctional space for relaxation and community gathering. The design centered around a gazebo—perfect for evening tea and casual conversations—strategically placed to capture shade and tranquility. A fishpond with gentle water cascades added sensory appeal, while a lotus pond in front of a Buddha statue created a serene meditative focal point. The open lawn bed encouraged children’s play, making the space inclusive for all ages. The project harmonized elements of landscape, water, and form to evoke calmness, interaction, and rejuvenation.

            </p>
          </div>
        </div>
      </div>

      {/* New Section: Image and Description */}
      
          <div className="intro8">
          
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
            
          /><ZoomImage
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
  
            <a class="left-link" href="/pro6">
            <span class="left-link__arrow">
            <span></span>
            <span></span>
            </span>
            <span class="left-link__line"></span>
            <span class="left-link__text">Previous Project</span>
            </a>

  
            <a class="center-link" href="/projects#projects-section">All Projects</a>

  
            <a class="right-link" href="/pro8">
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