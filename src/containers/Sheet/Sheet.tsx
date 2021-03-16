import React, { useState } from "react";
import "./Sheet.scss";
import { HeaderSheet } from "./HeaderSheet";
import { ExperienceSheet } from "./ExperienceSheet";
import { EducationSheet } from "./EducationSheet";
import { SkillsSheet } from "./SkillsSheet";

export const Sheet: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "794px",
          height: "1122px",
          padding: "2%",
          backgroundColor: "white",
          boxShadow: "0 0 0.5cm rgba(0,0,0,0.5)",
        }}
      >
        <HeaderSheet />
        <ExperienceSheet />
        <EducationSheet />
        <SkillsSheet />
      </div>
    </>
  );
};
