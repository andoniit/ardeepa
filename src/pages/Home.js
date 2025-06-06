import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation,useNavigate } from "react-router-dom";
import ReactGA from "react-ga";
import "./Home.css";
import heroVideo from "../assets/18.gif";
import fallbackImage from "../assets/18.gif";
import wideImage from "../assets/24.png";
import Navbar from "../components/Navbar.js";
import Tra from "../components/tra.js";

import TiltedCard from '../components/TiltedCard.js';


// Project Images
import project1 from "../assets/24-1.png";
import project2 from "../assets/25-2.png";
import project3 from "../assets/26-3.png";
import project4 from "../assets/27-4.png";
import project5 from "../assets/28-5.png";
import project6 from "../assets/28-5.png";

const TRACKING_ID = "G-2LL0NLDS0H";
ReactGA.initialize(TRACKING_ID);

const Home = () => {
  
  const projectData = [
    { id: "01", title: "Formula One Grand Prix Race Circuit", subtitle: "Masters 1st term project", img: project1, link: "/pro1" },
    { id: "02", title: "The Backyard Revival", subtitle: "Internship project", img: project2, link: "/pro2" },
    { id: "03", title: "Atrium of Light", subtitle: "Internship project", img: project4, link: "/pro3" },
    { id: "04", title: "Sweet Retreat", subtitle: "Internship project", img: project5, link: "/pro4" },
    { id: "05", title: "Backyard Reawakening", subtitle: "Internship project", img: project3, link: "/pro5" },
    { id: "06", title: "Square Group Project", subtitle: "Housing  Community", img: project6, link: "/pro6" },




  ];
  
  const navigate = useNavigate();
  // Track page views

  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);
  }
  usePageViews();

  // Framer Motion scroll hooks
  const { scrollY } = useScroll();

  // HERO IMAGE: parallax upward + zoom effect
  const heroImageY = useTransform(scrollY, [0, -100], [0, 150]);


  // HERO TEXT: slight upward parallax
  const heroContentY = useTransform(scrollY, [0, 600], [0, -70]);

  // NEXT SECTION (overlap container): slight parallax movement
  // This will make the overlapping container move up slightly slower than scroll.
  const sectionsY = useTransform(scrollY, [0, 700], [0, -300]);

  // Initial animations
  const heroContentAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
    },
  };

  const locationAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <>
    <Navbar />
      {/* HERO SECTION */}
      <motion.div
        className="home"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Navbar */}
        

        {/* Main Hero Content */}
        <div className="main-content-home">
          <motion.div
            className="hero-content"
            variants={heroContentAnimation}
            initial="initial"
            animate="animate"
            style={{ y: heroContentY }}
          >
            <h1 className="hero-architecture">ARCHITECTURE</h1>
            <h1 className="hero-title">
              PORT<span className="outline">FOLIO</span>
            </h1>
            <p className="hero-author"onClick={() => navigate('/about')}
      style={{ cursor: 'pointer' }}>
              Ar&nbsp;Deepa&nbsp;Devangmath
            </p>
          </motion.div>
        </div>

        {/* Location Tag */}
        <motion.div
          className="location-tag"
          variants={locationAnimation}
          initial="initial"
          animate="animate"
        >
          Chicago, IL
        </motion.div>

        {/* Hero Media with Parallax + Zoom */}
        <motion.div
          className="hero-image"
          style={{ y: heroImageY }}
        >
          <picture>
            <source srcSet={heroVideo} type="gif" />
            <img src={fallbackImage} alt="Hero Fallback" />
          </picture>
        </motion.div>
      </motion.div>
      <motion.div
        className="sections-container-before"
        style={{ y: sectionsY }}
      >
      {/* OVERLAPPING SECTIONS CONTAINER */}
      <motion.div
        className="sections-container"
        
      >
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
            imageHeight={window.innerWidth < 768 ? "150px" : "200px"}
            imageWidth={window.innerWidth < 768 ? "150vw" : "20em"}
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
        {/* Section 1 (Text) */}
        <motion.section
          className="layout"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="title">What I'am</div>
          <div className="small">
          I'm researching on "Designing Neurodiverse-Friendly University Spaces: Architectural Strategies for Supporting Autistic Students."
          </div>
          <div className="wall"></div>
          <div className="small-2">
          Simultaneously, I'm exploring the intersection of AI in architecture,
          </div>
          <div className="working">Working</div>
          <div className="on">On ?</div>
          <div className="small-3">
          I'm deeply engaged in analyzing Modern Architecture in Asia, with a particular emphasis on Japanese architecture from the pre-war and post-war eras.
          </div>
          <div className="small-4" onClick={() => navigate('/about')}
      style={{ cursor: 'pointer' }}>
          For more details about my background and interests, please visit the About page.
          </div>
        </motion.section>

        {/* Wide Image Section */}
        <motion.section
          className="wide-image-section"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <img className="wide-image" src={wideImage} alt="Wide Section" />
        </motion.section>

        {/* Section 2 (Text) */}
        <motion.section
          className="layout-2"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
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
        <motion.section
          className="layout-2"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
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
          
        </motion.section>
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
      </motion.div>
    </>
  );
};

export default Tra(Home);