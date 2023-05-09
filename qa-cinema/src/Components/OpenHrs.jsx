import React from "react";
import { Table } from "reactstrap";
import openHrsData from "./hrs-data.json";
import TitleCaseHelper from "./TitleCaseHelper";

const OpenHrs = () => {
    const columns = openHrsData[0];
    const tableKeys = Object.keys(columns);

    const getTableRows = () => 
            openHrsData.map((row, index) => {
                // const {weekday, open, close} = data;
                return (
                    <tr key={index}>
                        {tableKeys.map((key) => (
                            <td>{row[key]}</td>
                        ))}
                    </tr>
                )
    });

    const printTableKeys = () => 
            tableKeys.map(key => {
            return (
                <th>{TitleCaseHelper(key)}</th>
            )
    });

    return (
        <div style={{ padding: "10px", 
                        margin: "auto",  
                        width: "50%", }}>
            <Table  
                // style = {{ border: "4px solid white"}}
                bordered
                hover
                striped
                size="sm">
                <thead>
                    <tr>
                        {printTableKeys()}
                    </tr>
                </thead>
                <tbody>
                    {getTableRows()}
                </tbody>
            </Table>
        </div>
    );
}

export default OpenHrs;
