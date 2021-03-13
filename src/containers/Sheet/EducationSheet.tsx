import React from "react";
import "./Sheet.scss";

export const EducationSheet: React.FC = () => {
  return (
    <>
      <div className="header container">
        <div className="header label">Education</div>
        <div className="horizontal line"></div>
      </div>
      <div className="education content container">
        <table>
          <tbody>
            <tr>
              <td style={{ width: "17%" }}>2011-2015</td>
              <td>
                <b>Bachelor of Engineering (Computer Science)</b>
                <p>Dr. Mahalingam College of Engineering and Technology</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
