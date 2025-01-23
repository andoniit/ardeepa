import React, { useState } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"


import projectImage from "../pro-3/intro.png";
import projectImage1 from "../pro-3/1.jpg";
import projectImage2 from "../pro-3/2.jpg";
import projectImage3 from "../pro-3/3.jpg";
import projectImage4 from "../pro-3/5.HEIC";
import projectImage5 from "../pro-3/6.png";
import projectImage6 from "../pro-3/7.png";
import projectImage7 from "../pro-3/8.webp";
import projectImage8 from "../pro-3/9.webp";
import projectImage9 from "../pro-3/10.webp";
import projectImage10 from "../pro-3/11.webp";
import projectImage11 from "../pro-3/12.webp";
import projectImage12 from "../pro-3/13.webp";











const Project1 = () => {
 


  return (
    
    <div>
      
      {/* Hero Section */}
      <div className="project1-hero">
        <Navbar />
        <div className="project1-hero-content">
          <div className="project1-header">
            <h1>03</h1>
            <div className="project1-year">
              <p>2024</p>
              <span>Internship project</span>
              <span>Location : Belgaum, India</span>
              
            </div>
            
          </div>
          
          <div className="project1-details">
            
            <h2>Atrium of Light</h2>
            <p className="cover-description">
            Highlights how the central courtyard becomes the project's key connecting element, uniting surrounding spaces beneath a striking sloped skylight. It conveys a radiant core where light, air, and movement intersect, forming a communal gathering point around which all essential functions converge.
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
          <ZoomImage
            src={projectImage7}
            alt="Formula One Grand Prix Race Circuit"
            
          /><ZoomImage
          src={projectImage8}
          alt="Formula One Grand Prix Race Circuit"
          
        /><ZoomImage
        src={projectImage9}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
      src={projectImage10}
      alt="Formula One Grand Prix Race Circuit"
      
    /><ZoomImage
    src={projectImage11}
    alt="Formula One Grand Prix Race Circuit"
    
  /><ZoomImage
  src={projectImage12}
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

  
            <a class="center-link" href="/projects">All Projects</a>

  
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

      <ProgressCircle />
    </div>
  );
};

export default Tra(Project1);