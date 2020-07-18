import React from "react";
import "./Skills.modules.css";
import { skillsSection } from "../../data/data";
// import NestedList from "../skillset/SkillSet"

function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <img alt="Saad Working" src="./images/skillicon.svg"/>
        </div>
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
  );
}
export default Skills;