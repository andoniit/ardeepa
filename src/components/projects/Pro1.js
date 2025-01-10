import React, { useState } from "react";
import "./Promain.css";
import Navbar from "../Navbar";
import backgroundImage from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/6.png";
import projectImage from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/1_1.webp";
import projectImage1 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/1_2.webp";
import projectImage2 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/1_3.webp";
import projectImage3 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/1_4-2.webp";
import projectImage4 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/1_5.webp";
import projectImage5 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/1_6.webp";
import projectImage6 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/Ground floor_1_2.webp";
import projectImage7 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/First floor_1_0.webp";
import projectImage8 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/Second floor_1.webp";
import projectImage9 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/fourth floor_1_1.webp";
import projectImage10 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/section_1_1.webp";
import projectImage11 from "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/assets/pro-1/perspective.webp";



import { motion, useSpring, useScroll } from "motion/react"

import ZoomImage from "../ZoomImage";





const Project1 = () => {
  

  return (
    <div>
      
      {/* Hero Section */}
      <div className="project1-hero">
        <Navbar />
        <div className="project1-hero-content">
          <div className="project1-header">
            <h1>01</h1>
            <div className="project1-year">
              <p>2024</p>
              <span>Masters 1st Term Project</span>
              <span>Location: Chicago, Illinois</span>
            </div>
          </div>
          <div className="project1-details">
            <h2>Formula One</h2>
            <h2>Grand Prix Race Circuit</h2>
            <p className="cover-description">
              Proposal for the next Grand Prix in Chicago features a minimal-intervention race circuit
              designed with a key concept of year-round multipurpose use. Beyond race week, the track would
              serve as a versatile space for concerts, running, and public gatherings.
            </p>
          </div>
        </div>
      </div>

      {/* New Section: Image and Description */}
      <div className="project1-extra-section">
        <div className="project1-image">
          <ZoomImage
            src={projectImage}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <h2>Urban Renewal Strategy, Chicago Infrastructure development and budget.</h2>
          <ZoomImage
            src={projectImage1}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <h1>Chicago: Economic and Health Conditions</h1>

<div >
  <h2>Health Issues</h2>
  <p><strong>Chronic Conditions (2020):</strong></p>
  <ul>
    <li><span >Diabetes:</span> Approximately 13% of Chicago adults.</li>
    <li><span >Hypertension:</span> About 30% of adults.</li>
    <li><span >Obesity (2020):</span> Around 30% of Chicago adults.</li>
  </ul>
  <p><strong>Mental Health (2020):</strong> Nearly 20% of Chicagoans reported experiencing a mental health condition.</p>
</div>

<div >
  <h2>Uninsurance Rate</h2>
  <p>The uninsured rate exceeds <span >15%</span> in specific areas, as shown on the map (2018-2023).</p>
</div>

<div >
  <h2>Unemployment</h2>
  <ul>
    <li>Unemployment rates higher than <span >25%</span> at 47 census tracts of the city.</li>
    <li>As of <span >July 2024</span>, the unemployment rate in the Chicago metro area is <span >6.2%</span>, the highest among the nation's 50 largest metro areas.</li>
    <li>Within Chicago's city limits, the unemployment rate is even higher at <span >7.1%</span>, reflecting worsening job conditions.</li>
  </ul>
</div>
          <ZoomImage
            src={projectImage2}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <h1>Challenges Chicago</h1>


<h2>Public Safety and Criminality</h2>
<p>
  Chicago has struggled with high levels of gun violence, particularly in certain neighborhoods. Efforts to address this have included community programs, increased policing, and gun control initiatives, but challenges remain due to factors like gang activity, illegal firearms, and systemic issues.
</p>
<ul>
  <li><strong>Early 2000s:</strong> High rates of homicide</li>
  <li><strong>Peak 2016:</strong> Over 700 homicides</li>
  <li>
    <strong>2022-2023:</strong> Gradual decrease due to violence prevention strategies (technology, social services, etc.)
  </li>
</ul>
<p>
  The perception of crime can also affect tourism, investment, and the daily lives of residents, contributing to broader social and economic impacts.
</p>

<h2>Abandoned Buildings and Vacant Lands</h2>
<ul>
  <li>There are currently 5002 spots.</li>
</ul>

<h2>Declining Population</h2>
<p>
  With implications in the city’s economy. Since 2013, Chicago has experienced a decline in population. According to census data, the city’s population decreased by about 7% from 2013 to 2020.
</p>
<ZoomImage
            src={projectImage3}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <h1>Ideal Location for the Proposal</h1>

<ul>
  <li><strong>Decentralize events</strong> by integrating them into the Chicago Boulevard Park System</li>
  <li><strong>Revitalize underused public spaces</strong> and forgotten areas</li>
  <li><strong>Existing road infrastructure</strong></li>
  <li><strong>Connect neighborhoods</strong> and enhance social cohesion</li>
</ul>
<ZoomImage
            src={projectImage4}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <ZoomImage
            src={projectImage5}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <ZoomImage
            src={projectImage6}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <h1>Ground Floor Plan</h1>

<ul>
  <li><strong>Entrance</strong></li>
  <li><strong>Foreground</strong> / Gathering place / Concert arena</li>
  <li><strong>Parking Entrance</strong></li>
  <li><strong>Security</strong></li>
  <li><strong>Pit Boxes and Garages</strong></li>
  <li><strong>Media Centre</strong></li>
  <li><strong>Parking</strong></li>
</ul>
<ZoomImage
            src={projectImage7}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <h1>First Floor Plan</h1>

<ul>
  <li><strong>Merchandise Shops</strong></li>
  <li><strong>Lounge</strong></li>
  <li><strong>Restaurant</strong></li>
  <li><strong>Grandstand</strong></li>
  <li><strong>Lounges</strong></li>
</ul>
<ZoomImage
            src={projectImage8}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <h1>Second Floor Plan</h1>

<ul>
  <li><strong>Lounge</strong></li>
  <li><strong>Fan Interaction Area</strong></li>
  <li><strong>Conference Rooms</strong></li>
  <li><strong>Restaurant</strong></li>
  <li><strong>Bridge</strong></li>
  <li><strong>Lounges</strong></li>
</ul>
<ZoomImage
            src={projectImage9}
            alt="Formula One Grand Prix Race Circuit"
            
          />

<h1>Third & Fourth Floor Plan</h1>

<ul>
  <li><strong>Hospitality Rooms</strong></li>
  <li><strong>VIP Suites</strong></li>
  <li><strong>Lounges</strong></li>
</ul>
<ZoomImage
            src={projectImage10}
            alt="Formula One Grand Prix Race Circuit"
            
          />
          <ZoomImage
            src={projectImage11}
            alt="Formula One Grand Prix Race Circuit"
            
          />
         <div class="button-section">
  
         

  
  <a class="center-link" href="/projects">All Projects</a>

  
  <a class="right-link" href="/pro2">
  <span class="right-link__text">Next Project</span>
  <span class="right-link__line"></span>
  <span class="right-link__arrow">
    <span></span>
    <span></span>
  </span>
</a>
</div>
          
        </div>
        
       
      </div>

      
      
    </div>
  );
};

export default Project1;