import React from "react";
import TitleCaseHelper from "./TitleCaseHelper";

const PrintTableKeys = ({ tableKeys}) => 
    tableKeys.map(key => {
    return (
        <th>{TitleCaseHelper(key)}</th>
    )
});

export default PrintTableKeys;
