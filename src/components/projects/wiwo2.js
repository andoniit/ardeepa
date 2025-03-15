import React, { useLayoutEffect, useRef } from "react";
import "./wiwo.css";
import Navbar from "../Navbar";
import { motion } from "motion/react";
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import projectImage from "../wiwo-2/1.png";
import projectImage1 from "../wiwo-2/4.png";
import projectImage2 from "../wiwo-2/2.png";
import projectImage3 from "../wiwo-2/3.png";
import projectImage4 from "../wiwo-2/5.png";


import Orb from '../orb';



import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Project1 = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useLayoutEffect(() => {
    let mm = ScrollTrigger.matchMedia({
      // Desktop: apply horizontal scrolling
      "(min-width: 769px)": function () {
        const panels = gsap.utils.toArray(".panel");
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sliderRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => "+=" + sliderRef.current.offsetWidth,
          },
        });
      },
      // Mobile: remove any horizontal scroll effect
      "(max-width: 768px)": function () {
        // Optionally, you can clear transforms if needed.
      },
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <Navbar />
      <motion.div
        className="projects-page-wiwo"
        ref={sliderRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Panel 1: Hero Section */}
        <div className="panel section-wiwo">
          <div className="muller-hero-2">
          <div style={{ width: '20%', height: '600px', position: 'centre', index:'2' }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
</div>
            <div className="muller-grid">
              {/* Left Column */}
              
              {/* Center Column */}
              <div className="muller-column center-col">
                <h1>"Ai in Architecture"</h1>
              </div>
              {/* Right Column */}
              <div className="muller-column right-col">
                <h3>UNDER THE GUIDANCE OF<br></br>prof.Alphonso Peluso</h3>
                <p>
                I am studying AI in architecture, exploring various methods to create desired spaces by experimenting with different lighting, film colors, and visual elements. I utilize tools like MidJourney and Stable Diffusion to enhance and refine architectural designs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 2: Big Image 1 */}
        <div className="panel section-wiwo">
          <ZoomImage  src={projectImage} alt="Project Image 1" />
        </div>

        {/* Panel 3: Big Image 2 */}
        <div className="panel section-wiwo">
          <ZoomImage  src={projectImage1} alt="Project Image 2" />
        </div>

        {/* Panel 4: Big Image 3 */}
        <div className="panel section-wiwo">
          <ZoomImage  src={projectImage2} alt="Project Image 3" />
        </div>

        {/* Panel 5: Big Image 4 */}
        <div className="panel section-wiwo">
          <ZoomImage  src={projectImage3} alt="Project Image 4" />
        </div>

        
        

        {/* Panel 11: Big Image 10 */}
        <div className="panel section-wiwo">
          <ZoomImage  src={projectImage4} alt="Project Image 10"  />
          
        </div>
        
      </motion.div>
      <motion.div
        className="sections-container"
        
      >
        {/* Section 1 (Text) */}
        <motion.section
          className="layout"
          
        >
          <div className="title">What I'am Working on?</div>
          
          
          
          
        </motion.section>

        

        {/* Section 2 (Text) */}
        <motion.section
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
        </motion.section>
      </motion.div>
      <ProgressCircle />
    </div>
  );
};

export default Tra(Project1);