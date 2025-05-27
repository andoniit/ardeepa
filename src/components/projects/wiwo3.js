import React, { useLayoutEffect, useRef } from "react";
import "./wiwo.css";
import Navbar from "../Navbar";
import { color, motion } from "motion/react";
import ProgressCircle from "../ProgressCircle";
import ZoomImage from "../ZoomImage";
import Tra from "../tra";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import projectImage from "../wiwo-3/1.jpg";
import projectImage1 from "../wiwo-3/2.jpg";
import projectImage2 from "../wiwo-3/3.jpg";
import projectImage3 from "../wiwo-3/4.jpg";
import projectImage4 from "../wiwo-3/5.jpg";
import projectImage5 from "../wiwo-3/6.jpg";
import projectImage6 from "../wiwo-3/7.jpg";
import projectImage7 from "../wiwo-3/8.jpg";
import projectImage8 from "../wiwo-3/9.jpg";
import projectImage9 from "../wiwo-3/10.jpg";
import projectImage10 from "../wiwo-3/11.webp";
import projectImage11 from "../wiwo-3/12.webp";
import projectImage12 from "../wiwo-3/13.webp";





import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
 
gsap.registerPlugin(ScrollTrigger);

const Project1 = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useLayoutEffect(() => {
    let mm = ScrollTrigger.matchMedia({
      // Desktop: apply horizontal scrolling
      "(min-width: 1024px)": function () {
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
      "(max-width: 1024px)": function () {
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
          <div className="muller-hero-3">
            <div className="muller-grid">
              {/* Left Column */}
              
              {/* Center Column */}
              <div className="muller-column center-col">
                <h1>"Japnese Architecture"</h1>
                <h2 >日本の建築</h2>
              </div>
              {/* Right Column */}
              <div className="muller-column right-col">
                <h3> UNDER THE GUIDANCE OF<br></br>prof.Junko Taguchi</h3>
                <p>
                In our Modern Architecture in Asia course, we are exploring the preservation and modernization of architecture in East Asian countries, with a primary focus on pre-war and post-war modern Japanese architecture facing challenges such as deferred maintenance and demolition. Our study includes buildings documented by DOCOMOMO and a brief exploration of Kenzo Tange’s works and architectural principles. In mid-May, we will participate in an exhibition showcasing Japan’s post-war buildings and examining the impact of Westernization on Japan’s architectural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 2: Big Image 1 */}
        <div className="panel img">
          <ZoomImage src={projectImage} alt="Project Image 1"/> 
        </div>

        {/* Panel 3: Big Image 2 */}
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage1} alt="Project Image 2" />
        </div>

        {/* Panel 4: Big Image 3 */}
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage2} alt="Project Image 3" />
        </div>

        {/* Panel 5: Big Image 4 */}
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage3} alt="Project Image 4" />
        </div>

        {/* Panel 6: Big Image 5 */}
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage4} alt="Project Image 5" />
        </div>

        {/* Panel 7: Big Image 6 */}
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage5} alt="Project Image 6" />
        </div>

        {/* Panel 8: Big Image 7 */}
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage6} alt="Project Image 7" />
        </div>

        {/* Panel 9: Big Image 8 */}
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage7} alt="Project Image 8" />
        </div>

        {/* Panel 10: Big Image 9 */}
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage8} alt="Project Image 9" />
        </div>

        {/* Panel 11: Big Image 10 */}
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage9} alt="Project Image 10" />
          
        </div>
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage12} alt="Project Image 10" />
          
        </div>
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage10} alt="Project Image 10" />
          
        </div>
        <div className="panel section-wiwo">
          <ZoomImage src={projectImage11} alt="Project Image 10" />
          
        </div>
        
        
        
        
      </motion.div>
      {/* Section 2 (Text) */}
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
      </motion.div>
      <ProgressCircle />
    </div>
  );
};

export default Tra(Project1);