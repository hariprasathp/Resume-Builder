import React from "react";
import "./Sheet.scss";
import { useStore } from "../../store";
import { observer } from "mobx-react";

export const SkillsSheet: React.FC = observer(() => {
  const { resumeStore } = useStore();
  return (
    <>
      <div className="header container">
        <div className="header label">Skills</div>
        <div className="horizontal line"></div>
      </div>
      <div className="skills content container">
        {resumeStore.skills.skills.join(", ")}
      </div>
    </>
  );
});
