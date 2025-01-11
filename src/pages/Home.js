import React, { useEffect } from "react";
import "./Home.css";
import heroImage from "../assets/18.mp4"; 
import gsap from "gsap";
import Navbar from '../components/Navbar.js';

import heroImage2 from "../assets/1.png"; 


const Home = () => {
  useEffect(() => {
    // Animate location tag
    gsap.fromTo(
      ".location-tag",
      {
        opacity: 0,
        y: 20, // Start below
      },
      {
        opacity: 1,
        y: 0, // End at the original position
        duration: 1.5,
        ease: "power2.out",
      }
    );

    // Animate hero content
    gsap.fromTo(
      ".hero-content",
      {
        opacity: 0,
        x: 100, // Start off-screen to the right
      },
      {
        opacity: 1,
        x: 0, // End at the original position
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    // Animate navigation links
    gsap.fromTo(
      ".navbar-links li",
      {
        opacity: 0,
        y: -20, // Start above
      },
      {
        opacity: 1,
        y: 0, // End at the original position
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2, // Animate each link with a delay
      }
    );
  }, []);

  return (
    <div className="home">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <div className="hero-content">
          <h1 className="hero-architecture">ARCHITECTURE</h1>
          <h1 className="hero-title">
            PORT<span className="outline">FOLIO</span>
          </h1>
          <p className="hero-author">Deepa Devangmath</p>
        </div>
      </div>

      {/* Location Tag */}
      <div className="location-tag">
        Chicago, IL
      </div>

      {/* Hero Image */}
      <div className="hero-image">
        <img src={heroImage} alt={heroImage2} />
      </div>
    </div>
  );
};

export default Home;