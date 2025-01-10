import React, { useEffect, useRef, useState } from "react";
import Navbar from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/components/Navbar.js";
import "./Projects.css";
import { motion, useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

// Project Images
import project1 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/11.png";
import project2 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/10.png";

//sliderimage
import slider1 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/15.webp";
import slider2 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/16.webp";
import slider3 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/16.webp";
import slider4 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/11.png";
import slider5 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/13.png";
import slider6 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/8.png";
import slider7 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/10.png";
import slider8 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/11.png";





const Projects = () => {
    const projectData = [
        { id: "01", title: "Formula One Grand Prix Race Circuit", subtitle: "Masters 1st term project", img: project1, link: "/pro1" },
        { id: "02", title: "Urban Campus Housing", subtitle: "Masters 1st term project", img: project2 },
    ];

    // Scroll Progress
    const { scrollYProgress } = useScroll();

    // Parallax Gallery Effect
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { height } = dimension;
    const y1 = useTransform(scrollYProgress, [1, 0], [height, 0]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-150, height * 1.8]); // Adjusted to avoid jitter
    const y3 = useTransform(scrollYProgress, [1, 0], [height * 0.8, 0]); // Consistent scaling
    const y4 = useTransform(scrollYProgress, [0, 1], [-150, height * 1.5]); // Adjusted for smoother scroll
    
    useEffect(() => {
        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", resize);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
        
    }, []);

    return (
        <>
            
            

            <Navbar />
            
            {/* Gallery Section */}
            <div ref={gallery} className="gallery">
                <div className="gallery-wrapper">
                    <motion.div
                        className="gallery-column"
                        style={{ y: y1 }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1], // Smooth animation for parallax
                        }}
                    >
                        <div className="gallery-image">
                            <img src={slider1} alt="Project 1" />
                        </div>
                        <div className="gallery-image">
                            <img src={slider2} alt="Project 2" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="gallery-column"
                        style={{ y: y2 }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1], // Smooth animation for parallax
                        }}
                    >
                        <div className="gallery-image">
                            <img src={slider3} alt="Project 3" />
                        </div>
                        <div className="gallery-image">
                            <img src={slider4} alt="Project 3" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="gallery-column"
                        style={{ y: y3 }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1], // Smooth animation for parallax
                        }}
                    >
                        <div className="gallery-image">
                            <img src={slider5} alt="Project 3" />
                        </div>
                        <div className="gallery-image">
                            <img src={slider6} alt="Project 3" />
                        </div>
                    </motion.div>
                    <motion.div
                        className="gallery-column"
                        style={{ y: y4 }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1], // Smooth animation for parallax
                        }}
                    >
                        <div className="gallery-image">
                            <img src={slider7} alt="Project 3" />
                        </div>
                        <div className="gallery-image">
                            <img src={slider8} alt="Project 3" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Existing Hero Section */}
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

            {/* Existing Projects Section */}
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
        </>
    );
};

export default Projects;