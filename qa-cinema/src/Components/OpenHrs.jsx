import React, { useState } from "react";
import openHrsData from "./hrs-data.json";
import JsonTable from "./JsonTable";

const OpenHrs = () => {
    const [jsonData] = useState(openHrsData);

    return (
        <div style={{ padding: "10px", 
                        margin: "auto",  
                        width: "50%", }}>
            <h1>Opening Hours test</h1>
            <JsonTable jsonData={jsonData} />
        </div>
    );
}

export default OpenHrs;
