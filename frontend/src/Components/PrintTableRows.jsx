import React from "react";

const PrintTableRows = ({ rowData }) => {
        return (
            <tr> 
            {
                Object.values(rowData).map((value, i) => 
                <td style={{color: "white"}} key={i}>{value}</td>)
            }
            </tr>      
        )
}

export default PrintTableRows;