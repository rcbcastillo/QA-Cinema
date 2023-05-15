import React from "react";
import TitleCaseHelper from "./TitleCaseHelper";

const PrintTableKeys = ({ tableKeys}) => 
    tableKeys.map(key => {
    return (
        <th style={{color: "#234453"}}>{TitleCaseHelper(key)}</th>
    )
});

export default PrintTableKeys;
