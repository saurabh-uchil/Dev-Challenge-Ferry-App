import { FunctionComponent, ReactElement } from "react";
import "../css/TableComponent.css";
import { Vehicle } from "../types/Vehicle";

type Props = {
    header: string,
    data: Vehicle[],
    tableHeader: string[],
}

export const  FerryTable: FunctionComponent<Props> = (props:Props):ReactElement =>{

    const Row = props.data.map((item, index) => 
        <tr key={index}>
             <td>{index + 1}</td>
            {Object.values(item).map((key, i)=> {
                return<td key={i}>{key}</td>
                })}
        </tr>
    );

    const tableHeader = props.tableHeader.map((header, i)=>{
        return <th key={i}>{header}</th>
    });

    return(
        <>  
            <h4>
                {props.header}
            </h4>
            <table>
                <thead>
                <tr>
                    {tableHeader}
                </tr>
                </thead>
                <tbody>
                    {Row}
                </tbody>
            </table>
        </>
    );
}