import React from "react";

const PrintTableRows = ({rowData}) => {
    const tableKeys = Object.keys(rowData[0]);
    console.log({rowData});
    rowData.map((row, index) => {
        return (
            <tr key={index}>
                {tableKeys.map((key) => (
                    <td>{row[key]}</td>
                ))}
            </tr>
        )
});
}

export default PrintTableRows;