import React from "react";
import "./Sheet.scss";

export const HeaderSheet: React.FC = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingLeft: "2%",
        }}
      >
        <div style={{ width: "80%" }}>
          <h1 style={{ textTransform: "uppercase", color: "#0099cc" }}>
            HariPrasath P
          </h1>
          <p>
            104, Nachimuthu Gounder Street, Pollachi
            <br />
            Coimbatore TamilNadu
            {"  "}
            <br />
            +91 8754957794
            <br />
            hari.harithunder391@gmail.com
          </p>
          <div className="horizontal line"></div>
        </div>
      </div>
    </div>
  );
};
