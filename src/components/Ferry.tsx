import { FunctionComponent, ReactElement } from "react";
import { Vehicle } from "../types/Vehicle";
import { FerryTable } from "./FerryTable";
import small from "../assets/smallFerry.png";
import large from "../assets/largeFerry.png";

type Props = {
    capacity: number,
    type: string,
    vehicles : Vehicle[]
}
export const Ferry: FunctionComponent<Props> = (props:Props):ReactElement =>{
    
    const {capacity, type, vehicles} = props;
    
    const seatsLeft = capacity - vehicles.length;
    
    const img = type === 'small'? small : (type === 'large'? large : "");

    const data = vehicles.length === 0 ? 
    
    <div className="spots">
         <img src={img} alt={type} />
        <h5>No Vehicles in {type} ferry , Available Seats: {capacity}</h5>
    </div> :  
    
    <div>
    <img src={img} alt={type} />
    <FerryTable header={type} data={vehicles} tableHeader={['No', 'Type', 'Size', 'Cost']}/>
    <h5>Seats Left: {seatsLeft}</h5>
    </div>


    return(
        <>
        {data}
        </>
    )
}