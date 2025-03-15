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

  


const TRACKING_ID = "G-2LL0NLDS0H";
ReactGA.initialize(TRACKING_ID);

const Home = () => {
  
  
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
      </motion.div>
      </motion.div>
    </>
  );
};

export default Tra(Home);