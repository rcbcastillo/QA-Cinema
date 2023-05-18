import React, { useState } from "react";
import teamData from "./team-data.json";
import JsonTable from "./JsonTable";

const About = () => {
  const [jsonData] = useState(teamData);

  return (
    <>
      {/* <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4"> */}
      <div style={{ padding: "10px", margin: "auto", width: "50%" }}>
        <div className="about-box">
          <div className="about-heading">
            <h1 className="custom-header">QA Cinema by Sky Oyster</h1>
            <h1 className="custom-header">Meet the team</h1>
          </div>
        </div>
        <div className="about-content">
          <JsonTable jsonData={jsonData} />
        </div>
      </div>
    </>
  );
};
export default About;
