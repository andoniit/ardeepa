import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar.js";
import "./Projects.css";
import { motion, useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Tra from "../components/tra.js"
import ReactGA from "react-ga";


import TiltedCard from '../components/TiltedCard.js';

// Project Images
// Project Images
import project1 from "../assets/pro1.png";
import project2 from "../assets/pro2.png";
import project3 from "../assets/pro3.png";
import project4 from "../assets/pro4.png";
import project5 from "../assets/pro5.png";
import project6 from "../assets/pro6.png";
import project7 from "../assets/pro7.png";
import project8 from "../assets/pro8.png";


//import project3 from "../assets/25.png";

// Slider Images
import slider1 from "../assets/1p1.jpg";
import slider2 from "../assets/2p2.jpeg";
import slider3 from "../assets/3p3.jpg";
import slider4 from "../assets/4p4.png";
import slider5 from "../assets/5p5.png";
import slider6 from "../assets/6p6.jpg";
import slider7 from "../assets/7p7.jpg";
import slider8 from "../assets/8p8.jpg";


const TRACKING_ID = "G-2LL0NLDS0H";
ReactGA.initialize(TRACKING_ID);

const Projects = () => {
   const projectData = [
      { id: "01", title: "F1 Grand Prix Grandstand & F1 Racetrack", subtitle: "PROJECT TYPE - ACADEMIC, MASTERS", img: project1, link: "/pro1" },
    { id: "02", title: "PARAMETRIC SPIRES", subtitle: "  A STUDY OF SACRED GEOMETRY IN HIGH-RISE DESIGN ", img: project2, link: "/pro2" },
    { id: "03", title: "URBAN CANOPY", subtitle: "PARAMETRIC PAVILION FOR PUBLIC ENGAGEMENT ", img: project3, link: "/pro3" },
    { id: "04", title: "NEURODIVERSE FRIENDLY UNIVERSITY SPACES", subtitle: "ARCHITECTURAL STRATEGIES FOR SUPPORTING AUTISTIC STUDENTS", img: project4, link: "/pro4" },
    { id: "05", title: "Backyard Reawakening", subtitle: "A MULTICUISINE RESTAURANT", img: project5, link: "/pro5" },
    { id: "06", title: "HILLTOP CULTURAL SPINE", subtitle: "INTEGRATED CONVENTION AND MOBILITY HUB", img: project6, link: "/pro6" },
    { id: "07", title: "THE SERENITY COURTYARD", subtitle: "THE RESTORATIVE BACKYARD OASIS BLENDING TRANQUILITY, PLAY AND EVERYDAY GATHERING", img: project7, link: "/pro7" },
    { id: "08", title: "WILDSCAPE DOMES", subtitle: "IMMERSIVE GEODESIC RETREATS BLENDING LUXURY, WILDERNESS AND SERENITY", img: project8, link: "/pro8" },
  ];
  


  const gallery = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimensions;

  // Adjust transforms for smoother parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * -0.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-1000, height * 0.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * -0.5]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-1000, height * 0.5]);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    requestAnimationFrame(raf);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <Navbar />
    <motion.div
      className="projects-page"
      initial={{ opacity: 0, y: 50 }} // Start off-screen and faded
      animate={{ opacity: 1, y: 0 }} // Move to its normal position
      exit={{ opacity: 0, y: -50 }} // Exit upward with fade
      transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
    >
      

      {/* Hero Section */}
      <div className="project-hero">
        <div className="project-hero-content">
          <div className="project-hero-year">
            <p>2019</p>
            <div className="line"></div>
            <p>2024</p>
          </div>
          <div className="project-hero-title">
            <h1>PROJECTS</h1>
            <p>Ar Deepa Devangmath</p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div ref={gallery} className="gallery">
        <div className="gallery-wrapper">
          <motion.div className="gallery-column" style={{ y: y1 }}>
            <div className="gallery-image">
              <img src={slider1} alt="Project 1" />
            </div>
            <div className="gallery-image">
              <img src={slider2} alt="Project 2" />
            </div>
          </motion.div>
          <motion.div className="gallery-column" style={{ y: y2 }}>
            <div className="gallery-image">
              <img src={slider3} alt="Project 3" />
            </div>
            <div className="gallery-image">
              <img src={slider4} alt="Project 3" />
            </div>
          </motion.div>
          <motion.div className="gallery-column" style={{ y: y3 }}>
            <div className="gallery-image">
              <img src={slider5} alt="Project 3" />
            </div>
            <div className="gallery-image">
              <img src={slider6} alt="Project 3" />
            </div>
          </motion.div>
          <motion.div className="gallery-column" style={{ y: y4 }}>
            <div className="gallery-image">
              <img src={slider7} alt="Project 3" />
            </div>
            <div className="gallery-image">
              <img src={slider8} alt="Project 3" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects-section" className="table-of-contents-section">
        <h1>Recent</h1>
        <h2>Works</h2>
        
        <p>Click to view projects</p>
        <div className="contents-list">
  <div className="grid-gallery">
    {projectData.map((project) => (
      <a
        href={project.link}
        key={project.id}
        className="grid-item"
        rel="noopener noreferrer"
      >
        <div className="grid-image-wrapper">
          <TiltedCard
            imageSrc={project.img}
            altText={project.title}
            captionText="Click to view projects"
            containerHeight="auto"
            containerWidth="auto"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={window.innerWidth < 768}
            showTooltip={true}
            displayOverlayContent={true}
            objectFit="cover"
          />
          <div className="grid-number">{project.id}</div>
        </div>
        <div className="grid-text">
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
      </a>
    ))}
  </div>
</div>
      </div>
    </motion.div>
    </>
  );
};

export default Tra(Projects);