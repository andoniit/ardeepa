import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { motion, useSpring, useScroll } from "framer-motion";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {

    

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <>
    <motion.div
      id="scroll-indicator"
      className="scroll"
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        originX: 0,
        backgroundColor: "#FF007F",
        zIndex: 1000,
      }}
    />
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <a href="/" className="navbar-copyright">
        . Ar Deepa Devangmath
      </a>
      <nav>
        <ul className="navbar-links">
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a style={{
          color: "#FF007F",
          fontWeight: "bold"
        }}  href="/assets/Ar.Deepa_Full time roles_2025.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>

        </ul>
      </nav>
    </header>
    </>
  );
};

export default Navbar;