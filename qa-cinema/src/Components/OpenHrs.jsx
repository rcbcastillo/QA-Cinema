import React from "react";
import { Table } from "reactstrap";
import openHrsData from "./hrs-data.json";

const OpenHrs = () => {
    const tableData = openHrsData[0];
    const tableKeys = Object.keys(tableData);
    
    const printDaysTimes = () => 
            openHrsData.map((data, index) => {
                const {weekday, open, close} = data;
                return (
                    <tr key={index}>
                        <td>{weekday}</td>
                        <td>{open}</td>
                        <td>{close}</td>
                    </tr>
                )
    })

    return (
        <div style={{ padding: "10px", 
                        margin: "auto",  
                        width: "50%", }}>
            <Table
                style = {{ border: "3px" }}
                bordered
                hover
                striped
                size="sm">
                <thead>
                    <tr>
                        <th>Weekday</th>
                        <th>Open</th>
                        <th>Close</th>
                    </tr>
                </thead>
                <tbody>
                    {printDaysTimes()}
                </tbody>
            </Table>
        </div>
    );
}

export default OpenHrs;
