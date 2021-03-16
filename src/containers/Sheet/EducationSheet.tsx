import React from "react";
import "./Sheet.scss";
import { observer } from "mobx-react";
import { useStore } from "../../store";

export const EducationSheet: React.FC = observer(() => {
  const { resumeStore } = useStore();

  if (!resumeStore.education || resumeStore.education.length == 0) {
    return null;
  }

  return (
    <>
      <div className="header container">
        <div className="header label">Education</div>
        <div className="horizontal line"></div>
      </div>
      <div className="education content container">
        <table>
          <tbody>
            {resumeStore.education.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{ width: "17%" }}>{item.graduatedYear}</td>
                  <td>
                    <b>{item.degree}</b>
                    <p>{item.institute}</p>
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
