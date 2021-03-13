import React from "react";
import "./Sheet.scss";

export const SkillsSheet: React.FC = () => {
  return (
    <>
      <div className="header container">
        <div className="header label">Skills</div>
        <div className="horizontal line"></div>
      </div>
      <div className="skills content container">
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>ReactJS</li>
        </ul>
      </div>
    </>
  );
};
