import React from "react";
import { Table } from "reactstrap";
import openHrsData from "./hrs-data.json";
import TitleCaseHelper from "./TitleCaseHelper";

const OpenHrs = () => {
    const tableKeys = Object.keys(openHrsData[0]);

    const printTableRows = () => 
            openHrsData.map((data, index) => {
                const {weekday, open, close} = data;
                return (
                    <tr key={index}>
                        <td>{weekday}</td>
                        <td>{open}</td>
                        <td>{close}</td>
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
                style = {{ border: "4px solid white"}}
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
                    {printTableRows()}
                </tbody>
            </Table>
        </div>
    );
}

export default OpenHrs;
