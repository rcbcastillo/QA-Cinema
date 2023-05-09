import React, { useState } from "react";
// import { Table } from "reactstrap";
import openHrsData from "./hrs-data.json";
import JsonTable from "./JsonTable";
// import TitleCaseHelper from "./TitleCaseHelper";

const OpenHrs = () => {
    const [jsonData] = useState(openHrsData);

    return (
        <div style={{ padding: "10px", 
                        margin: "auto",  
                        width: "50%", }}>
            <JsonTable jsonData={jsonData} />
        </div>
    );
}

export default OpenHrs;
