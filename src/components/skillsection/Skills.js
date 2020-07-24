import React from "react";
import "./Skills.modules.css";
import { skillsSection } from "../../data/data";
import AOS from "aos"

function Skills() {
AOS.init();
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
      <div data-aos="flip-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
        <div className="skills-image-div">
          <img alt="Saad Working" src="./images/skillicon.svg"/>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="3000">
        <div className="skills-text-div">
          <h1 className="skills-heading">{skillsSection.title} </h1>
          <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
          <p className="softwareSkil">
            {skillsSection.softwareSkills.map(softwateskills => {
              return <span>{softwateskills}</span>;
            })}
          </p>
          <div>
            {skillsSection.skills.map(skills => {
              return <p className="subTitle skills-text">{skills}</p>;
            })}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Skills;