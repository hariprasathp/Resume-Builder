import React from "react";
import "./Sheet.scss";
import { observer } from "mobx-react";
import { useStore } from "../../store";

export const HeaderSheet: React.FC = observer(() => {
  const { resumeStore } = useStore();
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
          <h3 style={{ textTransform: "uppercase", color: "#0099cc" }}>
            {resumeStore.header.name}
          </h3>
          <p>
            {resumeStore.header.address}
            <br />
            {resumeStore.header.city}
            &nbsp;&nbsp; {resumeStore.header.state}
            {"  "}
            <br />
            {resumeStore.header.mobile}
            <br />
            {resumeStore.header.email}
          </p>
          <div className="horizontal line"></div>
        </div>
      </div>
    </div>
  );
});
