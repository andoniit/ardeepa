import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import heroVideo from "../assets/18.gif";
import fallbackImage from "../assets/18.gif";
import Navbar from "../components/Navbar.js";
import Tra from "../components/tra.js"
import ReactGA from "react-ga";

import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import {useEffect} from 'react';



const TRACKING_ID = "G-2LL0NLDS0H";
ReactGA.initialize(TRACKING_ID);
const Home = () => {
  const locationAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };
  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);
}
  const heroContentAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut", delay: 0.5 } },
  };

  const navbarLinksAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className="home"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      

      {/* Global Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="main-content">
        <motion.div
          className="hero-content"
          variants={heroContentAnimation}
          initial="initial"
          animate="animate"
        >
          
          <h1 className="hero-architecture">ARCHITECTURE</h1>
          <h1 className="hero-title">
            PORT<span className="outline">FOLIO</span>
          </h1>
          <p  className="hero-author" href="/about" > Ar Deepa Devangmath</p>
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
      

      {/* Hero Media */}
      <div className="hero-image">
        <picture>
          <source srcSet={heroVideo} type="gif" />
          <img src={fallbackImage} alt="Hero Fallback" />
        </picture>
      </div>
    </motion.div>
  );
};

export default Tra(Home);