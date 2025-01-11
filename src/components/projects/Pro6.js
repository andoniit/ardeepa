import React from "react";
import "./Promain.css";
import Navbar from "../Navbar";


const Project1 = () => {
  const backgroundStyle = {

    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    
  };
  return (
    
    <div  className="project1-hero">
      <Navbar />
      <div className="project1-hero-content">
        <div className="project1-header">
          <h1>06</h1>
          <div className="project1-year">
            <p>2024</p>
            <span>Masters 1st Teram Project</span>
            <span>Location:chicago, Illinois</span>

          </div>
        </div>
        <div className="project1-details">
          <h2>Formula One </h2>
          <h2>Grand Prix Race Circuit</h2>
          <p className="cover-description">
            Cover Description: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, integer lectus, sed in felis dignissim convallis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project1;