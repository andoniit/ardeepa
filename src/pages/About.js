import React, { useRef,useEffect } from "react";
import Navbar from "../components/Navbar.js";
import "./About.css";
import ReactGA from "react-ga";
import {BrowserRouter as useLocation} from 'react-router-dom';
import { motion, useScroll, useTransform } from "framer-motion";
import Tra from "../components/tra.js"
import MagnetLines from '../components/MagnetLines.js';

import project1 from "../assets/19.jpg";
import project2 from "../assets/7-1024x1024.png";
import project3 from "../assets/diploma.jpg";
import { LinkedInEmbed } from 'react-social-media-embed';
import gsap from "gsap";
const TRACKING_ID = "G-2LL0NLDS0H";
ReactGA.initialize(TRACKING_ID);
const About = () => {
  

  

  
  
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);
}

  // Transform for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
  //const y2 = useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"]);

  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5, ease: "easeIn" } },
  };
  useEffect(() => {
    const hoverImages = gsap.utils.toArray(".hover-image");
    const educationDetails = gsap.utils.toArray(".education-details");

    hoverImages.forEach((image, index) => {
      const detail = educationDetails[index];
      const setX = gsap.quickSetter(image, "x", "px");
      const setY = gsap.quickSetter(image, "y", "px");

      const align = (e) => {
        setX(e.clientX);
        setY(e.clientY);
      };

      const startFollow = () => document.addEventListener("mousemove", align);
      const stopFollow = () => document.removeEventListener("mousemove", align);

      const fade = gsap.to(image, {
        autoAlpha: 1,
        duration: 0.2,
        ease: "power1.out",
        paused: true,
        onReverseComplete: stopFollow,
      });

      detail.addEventListener("mouseenter", (e) => {
        fade.play();
        startFollow();
        align(e);
      });

      detail.addEventListener("mouseleave", () => {
        fade.reverse();
      });
    });
  }, []);


  return (
    <>
    
    <Navbar />
      <motion.div
      className="page"
      ref={containerRef}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="page" ref={containerRef}>
        {/* Hero Section */}
        <section className="hero">
          
          <motion.div
            className="hero-background hero-background-1"
            style={{ y: y1 }}
          ></motion.div>
          <motion.div
            className="hero-background hero-background-2"
            style={{ y: y1 }}
          ></motion.div>
          <header className="hero-header">
            
            <h1 className="hero-title-about">Ar.Deepa Devangmath,</h1>
            <h2 className="hero-sub-about">AIAs,S.M.ASCE</h2>
            <p className="hero-subtitle">
             Architect | Researcher | Architectural designer
            </p>
            <p className="hero-subtitle-loc">
             Chicago,IL
            </p>
          </header>
        </section>
        
      {/* Main Content */}
      
      <article id="introduction">
        <h2 class="article-title">Deepa Devangmath</h2>
        

        <p>
        Deepa Devangmath,  based in <strong>Chicago, USA </strong> 
 I'm a licensed architect in my  <strong>ninth year</strong> of architectural studies. I spent<strong> three years </strong>  at a construction and architecture firm, where I curated and designed six co-housing projects. During this time, I conducted frequent site visits to oversee construction, which gave me hands-on experience with structural systems and materials. I also worked closely with structural engineers, elevator and plumbing specialists, and on-site teams, gaining insight into their challenges and refining project drawings to address these issues.
<br></br><br></br>
Following that, I spent <strong>  two years </strong>  at two different architectural firms focusing on fabrication design, where I strengthened my skills in detailed furniture and flooring design.<strong>  Having completed nine studio projects </strong>  during my academic journey and several personal projects, I felt motivated to support the neurodivergent community through my work.<strong>  I'm currently researching inclusive design for neurodivergent individuals, </strong>  using evidence-based design guidelines shaped by psychology professionals and high-functioning individuals.
<br></br><br></br>
<strong> I am now seeking a summer internship </strong>  that will enable me to delve deeper into these inclusive design projects and contribute my expertise to a forward-thinking team. I look forward to the opportunity to collaborate and share my passion for creating spaces that accommodate a diverse range of needs.
        </p>
        
      </article>

      {/* Timeline Section */}
      <section className="experience-section">
  {/* Left Column: Title */}
  <section className="education-skills-section">
  {/* Education Section */}
  <section className="education-section">
          <h2>Education</h2>
          <ul className="education-list">
            <li>
              <div className="education-year">2024 - 2025</div>
              <div className="education-details">
                Illinois Institute of Technology, Chicago, USA / <strong>Master of Science in Architecture</strong> - 3 terms
              </div>
              <div className="hover-image">
                <img src={project1} alt="Master's Program" />
              </div>
            </li>
            <li>
              <div className="education-year">2019 - 2024</div>
              <div className="education-details">
                KLS Gogte Institute of Technology, Karnataka, India / <strong>Bachelor of Architecture</strong> - 10 terms
              </div>
              <div className="hover-image">
                <img src={project2} alt="Bachelor's Program" />
              </div>
            </li>
            <li>
              <div className="education-year">2016 - 2019</div>
              <div className="education-details">
                KLS VPP, Karnataka, India / <strong>Diploma in Architecture</strong> - 6 terms
              </div>
              <div className="hover-image">
                <img src={project3} alt="Diploma Program" />
              </div>
            </li>
          </ul>
        </section>

  {/* Skills Section */}
  <div className="skills-section">
    <h2>Skills</h2>
    <ul className="skills-list">
      <li><strong>BIM / CAD:</strong> Revit / AutoCAD</li>
      <li><strong>Modeling:</strong> Sketchup / Rhino / Grasshopper</li>
      <li><strong>Render:</strong> Lumion / V-Ray / Enscape</li>
      <li><strong>Adobe:</strong> Photoshop / Illustrator / Indesign / Premiere</li>
    </ul>
    </div>
  <div className="mg-lines">
  <MagnetLines
 rows={9}
  columns={9}
  containerSize="50vmin"
  lineColor="rgb(221, 221, 221)"
  lineWidth="0.5vmin"
  lineHeight="3vmin"
  baseAngle={0}
  
  style={{ margin: "1rem auto" }}
></MagnetLines>
</div>
</section>


  {/* Right Column: Timeline */}
  <div className="timeline">
  <h2>Work Experience</h2>
  {/* Event 0 */}
  <div className="timeline-event">
      <div className="timeline-event-icon"></div>
      <div className="timeline-event-copy">
        <p className="timeline-event-thumbnail">Jan. 2025 – Present </p>
        <h3>Research Assistant</h3>
        <h4>Illinois Institute of Technology</h4>
        <p>As a Circulation Desk Operator, I manage the organization and upkeep of library books, ensuring they are properly arranged for easy access. My 
responsibilities include checking books in and out for library users, as well as labeling and cataloging new arrivals to maintain an efficient system.</p>
      </div>
    </div>
    {/* Event 1 */}
    <div className="timeline-event">
      <div className="timeline-event-icon"></div>
      <div className="timeline-event-copy">
        <p className="timeline-event-thumbnail">2023 - 2024</p>
        <h3>Freelance Architect</h3>
        <h4>Architectural Designer</h4>
        <p>Successfully completed designing 5 residential apartments along with one commercial bakery.</p>
      </div>
    </div>

    {/* Event 2 */}
    <div className="timeline-event">
      <div className="timeline-event-icon"></div>
      <div className="timeline-event-copy">
        <p className="timeline-event-thumbnail">2023 Feb - July</p>
        <h3>M.G Studio</h3>
        <h4>Office Intern</h4>
        <p>Collaborated on a restaurant project, focusing on fabrication details and integrating the built environment with the central courtyard.</p>
        <p>Led a landscape project to rejuvenate an abandoned backyard into an interactive party space, incorporating a water feature as a tranquil element.</p>
        <p>Designed a geodesic dome resilient to harsh weather conditions and completed the design and execution of six interior projects in two months.</p>
      </div>
    </div>

    {/* Event 3 */}
    <div className="timeline-event">
      <div className="timeline-event-icon"></div>
      <div className="timeline-event-copy">
        <p className="timeline-event-thumbnail">2020 - 2023</p>
        <h3>Home Square Group</h3>
        <h4>Junior Architect</h4>
        <p>Collaborated with multiple agencies and led the design and site supervision of 6 co-housing projects, including structural details, with one project being an old-age home community.</p>
      </div>
    </div>

    {/* Event 4 */}
    <div className="timeline-event">
      <div className="timeline-event-icon"></div>
      <div className="timeline-event-copy">
        <p className="timeline-event-thumbnail">2018 - 2019</p>
        <h3>Rukmini Architects</h3>
        <h4>Office Intern</h4>
        <p>Spearheaded the renovation of a public garden, developed Mughal-style concepts for an interior project, prepared working drawings for multiple interior projects, and designed a market outlet.</p>
      </div>
    </div>
  </div>
</section>
</div>
</motion.div>

    </>
    
  );
};

export default Tra(About);