import React from "react";
import { Table } from "reactstrap";
import PrintTableKeys from "./PrintTableKeys";
import PrintTableRows from "./PrintTableRows";

const JsonTable = ({jsonData}) => {

    if(!jsonData.length) return <div>No data listed.</div>;

    const columns = jsonData[0];
    const tableKeys = Object.keys(columns);

    return (
        <Table  
            // style = {{ border: "4px solid white"}}
            bordered
            hover
            striped
            size="sm">
            <thead>
                <tr>
                    <PrintTableKeys tableKeys={tableKeys} /> 
                </tr>
            </thead>
            <tbody>
                <PrintTableRows rowData={jsonData} />
            </tbody>
        </Table>
    )
}

export default JsonTable;