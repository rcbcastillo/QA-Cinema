import React from "react";
import { Table } from "reactstrap";
import PrintTableKeys from "./PrintTableKeys";
import PrintTableRows from "./PrintTableRows";

const JsonTable = ({jsonData}) => {

    if(!jsonData.length) return <div>No data listed.</div>;

    const columns = jsonData[0];
    const tableKeys = Object.keys(columns);

    return (
        <table  
            style = {{ border: "2px solid white"}}
            className="custom-table">
            <thead>
                <tr className="bg-japanese-indigo text-white">
                    <PrintTableKeys tableKeys={tableKeys} /> 
                </tr>
            </thead>
            <tbody>
                {   
                    jsonData.map((row) => <PrintTableRows rowData={row}/>)
                }
            </tbody>
        </table>
    )
}

export default JsonTable;