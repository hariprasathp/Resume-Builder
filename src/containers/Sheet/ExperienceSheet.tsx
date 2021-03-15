import React from "react";
import "./Sheet.scss";
import { observer } from "mobx-react";
import { useStore } from "../../store";

export const ExperienceSheet: React.FC = observer(() => {
  const { resumeStore } = useStore();

  if (!resumeStore.experience || resumeStore.experience.length === 0) {
    return null;
  }

  return (
    <>
      <div className="header container">
        <div className="header label">Experience</div>
        <div className="horizontal line"></div>
      </div>
      <div className="experience content container">
        <table>
          <tbody>
            {resumeStore.experience.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{ width: "17%" }}>
                    {item.yearStart}-{item.yearEnd}
                  </td>
                  <td>
                    <b>{item.designation}</b>
                    <p>{item.company}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
});
