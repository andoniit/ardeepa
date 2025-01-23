import React from "react";
import Navbar from "../components/Navbar.js";
import "./contact.css";
import Tra from "../components/tra.js"


// Import the image
import featuredImage from "../assets/12.jpg"; 

const Contact = () => {
    return (
        <div>
          
        <Navbar/>
      <div className="contact-hero">
        
        <div className="contact-hero-left">
          <p className="contact-number">Lets connect .</p>
          <h1 className="contact-title">Contact.</h1>
          
          <div class="contact-cta">
  <a href="mailto:ddevangmath@hawk.iit.edu" class="email-link">Send an Email <br/>ddevangmath@hawk.iit.edu</a>
</div>
        </div>
  
        <div className="contact-hero-right">
          <div className="contact-featured">
            <img
              src={featuredImage}
              alt="Contact Featured"
              className="contact-featured-image"
            />
          </div>
          
        </div>
      </div>
      </div>
    );
  };
  
  export default Tra(Contact);