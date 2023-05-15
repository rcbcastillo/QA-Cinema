import React from "react";

const PrintTableRows = ({ rowData }) => {
    console.log({rowData});
    console.log("Got to here!");
        return (
            <tr> 
            {
                Object.values(rowData).map((value, i) => 
                <td key={i}>{value}</td>)
            }
            </tr>      
        )
}

export default PrintTableRows;