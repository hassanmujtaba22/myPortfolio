import React from "react";
import "./SocialMedia.modules.css";
import { socialMediaLink } from "../../data/data";

function SocialMedia() {
  return (
    <div className="social-media-div"> 
      <a href={socialMediaLink.github} className="icon-button github" target="_blank">
        <i className="fab fa-github"></i>
        <span></span>
      </a>

      <a href={socialMediaLink.linkedin} className="icon-button linkedin" target="_blank">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>

      <a href={`mailto:${socialMediaLink.gmail}`} className="icon-button google" target="_blank">
        <i className="fab fa-google"></i>
        <span></span>
      </a>

      <a href={socialMediaLink.facebook} className="icon-button facebook" target="_blank">
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
      
    </div>
  );
}
export default SocialMedia