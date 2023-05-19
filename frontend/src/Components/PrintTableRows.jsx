import React from "react";

const PrintTableRows = ({ rowData }) => {
        return (
            <tr className="odd:bg-metallic-steel"> 
            {
                Object.values(rowData).map((value, i) => 
                <td className="custom-td" key={i}>{value}</td>)
            }
            </tr>      
        )
}

export default PrintTableRows;