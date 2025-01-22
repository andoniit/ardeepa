import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar.js";
import "./Projects.css";
import { motion, useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Tra from "../components/tra.js"

// Project Images
import project1 from "../assets/20.png";
import project2 from "../assets/20.png";

// Slider Images
import slider1 from "../assets/15.webp";
import slider2 from "../assets/16.webp";
import slider3 from "../assets/16.webp";
import slider4 from "../assets/11.png";
import slider5 from "../assets/13.png";
import slider6 from "../assets/8.png";
import slider7 from "../assets/10.png";
import slider8 from "../assets/11.png";

const Projects = () => {
  const projectData = [
    { id: "01", title: "Formula One Grand Prix Race Circuit", subtitle: "Masters 1st term project", img: project1, link: "/pro1" },
    { id: "02", title: "Urban Campus Housing", subtitle: "Masters 1st term project", img: project2, link: "/pro2" },
    { id: "03", title: "Atrium of Light", subtitle: "Internship project", img: project2, link: "/pro3" },

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
            <p>of Deepa Devangmath</p>
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
      <div className="table-of-contents-section">
        <h1>Recent</h1>
        <h2>Work</h2>
        <p>Click to view projects</p>
        <div className="contents-list">
          {projectData.map((project) => (
            <a href={project.link} key={project.id} className="content-item" rel="noopener noreferrer">
              <div className="content-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="content-details">
                <span>{project.id}</span>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Tra(Projects);