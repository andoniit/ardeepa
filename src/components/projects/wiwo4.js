import React, { useState } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import { motion, useSpring, useScroll } from "motion/react"
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra"


import projectImage from "../wiwo-4/1.webp";
import projectImage1 from "../wiwo-4/2.webp";
import projectImage2 from "../wiwo-4/3.webp";
import projectImage3 from "../wiwo-4/4.webp";
import projectImage4 from "../wiwo-4/5.webp";
import projectImage5 from "../wiwo-4/6.webp";
import projectImage6 from "../wiwo-4/7.webp";
import projectImage7 from "../wiwo-4/8.webp";
import projectImage8 from "../wiwo-4/9.webp";
import projectImage9 from "../wiwo-4/10.webp";
import projectImage10 from "../wiwo-4/11.webp";
import projectImage11 from "../wiwo-4/12.webp";
import projectImage12 from "../wiwo-4/13.webp";
import projectImage13 from "../wiwo-4/14.webp";

import projectImage14 from "../wiwo-4-2/1.webp";
import projectImage15 from "../wiwo-4-2/2.webp";
import projectImage16 from "../wiwo-4-2/3.webp";
import projectImage17 from "../wiwo-4-2/4.webp";
import projectImage18 from "../wiwo-4-2/5.webp";
import projectImage19 from "../wiwo-4-2/6.webp";
import projectImage20 from "../wiwo-4-2/7.webp";
import projectImage21 from "../wiwo-4-2/8.webp";
import projectImage22 from "../wiwo-4-2/9.webp";
import projectImage23 from "../wiwo-4-2/10.webp";
import projectImage24 from "../wiwo-4-2/11.webp";
import projectImage25 from "../wiwo-4-2/12.webp";
import projectImage26 from "../wiwo-4-2/13.webp";
import projectImage27 from "../wiwo-4-2/14.webp";



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
          
          
          <div className="project1-details">
            
            <h2>BIM / Revit</h2>
            <p className="cover-description">
                In the Advanced BIM/Revit Modeling course, we explored the software interface, key tools, and multiple modeling techniques. Beyond just creating models, we also gained a comprehensive understanding of how Building Information Modeling (BIM) functions—specifically, how it integrates data with geometry to manage and communicate project information effectively throughout the design and construction lifecycle.
            </p>
            
          </div>
        </div>
      </div>
      

      {/* New Section: Image and Description */}

      <div className="introwiwo6">
          
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
        
      /><ZoomImage
        src={projectImage13}
        alt="Formula One Grand Prix Race Circuit"
        
      />
        <h1>Albany Chicago public library</h1>
      <ZoomImage
        src={projectImage14}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage15}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage16}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage17}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage18}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage19}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage20}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage21}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage22}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage23}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage24}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage25}
        alt="Formula One Grand Prix Race Circuit"
        
      /><ZoomImage
        src={projectImage26}
        alt="Formula One Grand Prix Race Circuit"
        
      />
          <section
                    className="layout-2"
                    
                  >
                    <div className="first">
                    AI in Architecture
                      <br />
                      <p>
                      Exploring innovative applications of artificial intelligence in architecture, focusing on how AI enhances creativity, efficiency, and sustainability in architectural design.
                      </p>
                      <br />
                      <a className="right-link" href="/wiwo2">
                        <span className="right-link__text">read more</span>
                        <span className="right-link__line"></span>
                        <span className="right-link__arrow">
                          <span></span>
                          <span></span>
                        </span>
                      </a>
                    </div>
                    
                    <div className="second">
                    Research on Neurodivergence
                      <p>
                      Investigating architectural strategies to support neurodiverse students, with an emphasis on creating inclusive, accessible university environments, specifically for autistic individuals.
                      </p>
                      <br />
                      <a className="right-link" href="/wiwo1">
                        <span className="right-link__text">read more</span>
                        <span className="right-link__line"></span>
                        <span className="right-link__arrow">
                          <span></span>
                          <span></span>
                        </span>
                      </a>
                    </div>
                    <div className="third">
                    Japanese Architecture
                      <p>
                      Analyzing modern Japanese architecture, examining its evolution and key characteristics from the pre-war era to contemporary design practices in the post-war period.
                      </p>
                      <br />
                      <a className="right-link" href="/wiwo3">
                        <span className="right-link__text">read more</span>
                        <span className="right-link__line"></span>
                        <span className="right-link__arrow">
                          <span></span>
                          <span></span>
                        </span>
                      </a>
                    </div>
                  </section>
                  <section
                    className="layout-2"
                    
                  >
                    <div className="first">
                    BIM Revit
                      <br />
                      <p>
                        In the Advanced BIM/Revit Modeling course, we explored the software interface, key tools, and multiple modeling techniques. Beyond just creating models, we also gained a comprehensive understanding of how Building Information Modeling (BIM) 
                      </p>
                      <br />
                      <a className="right-link" href="/wiwo4">
                        <span className="right-link__text">read more</span>
                        <span className="right-link__line"></span>
                        <span className="right-link__arrow">
                          <span></span>
                          <span></span>
                        </span>
                      </a>
                    </div>
                    
                    <div className="second">
                    History Sketches
          
                      <p>
                        As part of my architectural studies, I created a series of hand-drawn and digital sketches that chronologically explore key moments in architectural history. These sketches span from ancient civilizations—such as Egyptian, Greek, and Roman architecture—through to Gothic cathedrals, Renaissance 
                      </p>
                      <br />
                      <a className="right-link" href="/wiwo5">
                        <span className="right-link__text">read more</span>
                        <span className="right-link__line"></span>
                        <span className="right-link__arrow">
                          <span></span>
                          <span></span>
                        </span>
                      </a>
                    </div>
                    
                  </section>
          
          </div>
        
       
      </div>
      </motion.div>
      <section className="video-section">
  <h2 className="video-section-title">Featured Videos</h2>
  <div className="video-row">
    <div className="video-item">
      <h3>Sex in Architecture</h3>
      <iframe
        width="350"
        height="200"
        src="https://www.youtube.com/embed/W-ie9n7I0KU?si=rbfGfzzH-1I9UxoY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>

    <div className="video-item">
      <h3>AI in Architecture</h3>
      <iframe
        width="350"
        height="200"
        src="https://www.youtube.com/embed/HuZBbe8QjYA?si=wG1oMwz3HYlqCX_w"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>

    <div className="video-item">
      <h3>Japnese Archi</h3>
      <iframe
        width="350"
        height="200"
        src="https://www.youtube.com/embed/Rcm1jfEO2ws?si=SVlaqkkMfxjor5CF"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>
      <ProgressCircle />
    </div>
  );
};

export default Tra(Project1);