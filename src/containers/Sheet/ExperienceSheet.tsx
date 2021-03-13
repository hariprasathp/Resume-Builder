import React from "react";
import "./Sheet.scss";

export const ExperienceSheet: React.FC = () => {
  return (
    <>
      <div className="header container">
        <div className="header label">Experience</div>
        <div className="horizontal line"></div>
      </div>
      <div className="experience content container">
        <table>
          <tbody>
            <tr>
              <td style={{ width: "17%" }}>2015-Present</td>
              <td>
                <b>Software Engineer</b>
                <p>Visinture Strategic Solutions Pvt. Ltd</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
