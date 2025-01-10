import React, { useRef } from "react";
import Navbar from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/components/Navbar.js";
import "./About.css";
import skillsImage from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/9.jpg";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"]);

  return (
    <>
      
      <div className="page" ref={containerRef}>
        {/* Hero Section */}
        <section className="hero">
          <Navbar />
          <motion.div
            className="hero-background hero-background-1"
            style={{ y: y1 }}
          ></motion.div>
          <motion.div
            className="hero-background hero-background-2"
            style={{ y: y2 }}
          ></motion.div>
          <header className="hero-header">
            <h1 className="hero-title-about">Deepa Devangmath</h1>
            <p className="hero-subtitle">
              Architect | Urban Designer | Interior Specialist
            </p>
          </header>
        </section>

      {/* Main Content */}
      <article id="introduction">
        <h2 class="article-title">Deepa Devangmath</h2>
    
        <p>
        I am a licensed architect from India, currently in my ninth year of studying architecture. My re-
search delves into how space impacts human behavior and, in turn, their mental well-being. My de-
sign philosophy centers on creating harmony between context, built form, and users. I have actively
collaborated on various live projects and take great interest in conducting case studies of thought-
fully designed spaces, focusing on their construction methods, material choices, and zoning strat-
egies. I strongly believe that collaboration, empathy, and attentive listening are key to developing
meaningful architectural solutions.
        </p>
        
      </article>
      {/* Timeline Section */}
      <section className="experience-section">
  {/* Left Column: Title */}
  <section className="education-skills-section">
  {/* Education Section */}
  <div className="education-section">
    <h2>Education</h2>
    <ul className="education-list">
      <li>
        <div className="education-year">2024 - 2025</div>
        <div className="education-details">
          Illinois Institute of Technology, Chicago, USA / <strong>Master of Science in Architecture</strong> - 3 terms
        </div>
      </li>
      <li>
        <div className="education-year">2019 - 2024</div>
        <div className="education-details">
          KLS Gogte Institute of Technology, Karnataka, India / <strong >Bachelor of Architecture</strong> - 10 terms
        </div>
      </li>
      <li>
        <div className="education-year">2016 - 2019</div>
        <div className="education-details">
          KLS VPP, Karnataka, India / <strong>Diploma in Architecture</strong> - 6 terms
        </div>
      </li>
    </ul>
  </div>

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
  <div className="skills-image-container">
  <img src={skillsImage} alt="Skills Representation" className="skills-image" />
</div>
</section>


  {/* Right Column: Timeline */}
  <div className="timeline">
  <h2>Work Experience</h2>
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
    </>
    
  );
};

export default About;