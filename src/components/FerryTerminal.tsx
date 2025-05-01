import { FunctionComponent, ReactElement, useState } from "react";
import { getRandomVehicle, Vehicle } from "../types/Vehicle.ts";
import "../css/FerryTerminal.css";
import { vehicleList } from "../data/data.tsx";
import { toast, ToastContainer } from 'react-toastify';
import { Earnings } from "./Earnings.tsx";
import { Ferry } from "./Ferry.tsx";
import { FerryType } from "../types/Ferry.ts";
import { Fares } from "../types/Fares.ts";
import { FaresTable } from "./FaresTable.tsx";


type Props = {
  intro: string,
  priceboard: string,
  ferryInfo: string,
  isFull: string
};


export const FerryTerminal: FunctionComponent<Props> = (props: Props): ReactElement => {
  
  //States
  const [availableFerries, setAvailableFerries] = useState<FerryType[]>([{type:'small', capacity: 6, vehicles: []}, {type:'large', capacity: 8, vehicles: []}])
  const [isFull, setIsFull] = useState<boolean>(false);
  
  //Ferries
  const ferryElement = availableFerries.map((ferry, i) =>{
    return <Ferry key={i} capacity={ferry.capacity} vehicles={ferry.vehicles} type={ferry.type}/>
  });

  //Vehicle Price List For the table
  const vehiclesPriceList : Fares[] = vehicleList;

  //Calculate the terminal earnings
  const terminalEarnings: number = availableFerries.reduce((acc,current)=> acc+current.vehicles.reduce((acc, current)=> acc+current.cost,0),0);


  // Replace/remove any of the code below as you see fit
  const onClick = (): Vehicle => {
    const vehicle:Vehicle = getRandomVehicle();
    
    //Notification
    toast("New vehicle generated: "+vehicle.type, {autoClose: 2000});
    
    let addVehicle = false;
    
    const updatedFerries = availableFerries.map((ferry)=>{
      if(ferry.type === vehicle.size && ferry.vehicles.length !== ferry.capacity && !addVehicle){
          addVehicle = true;
          return {...ferry, vehicles:[...ferry.vehicles, vehicle]};
      }
      else{
        return ferry
      }
    });

    if(!addVehicle){
      toast(`Sorry!! ${vehicle.size} ferry is full`, {autoClose: 2000});
    }
    
    setAvailableFerries(updatedFerries);

    const allFerriesFull = availableFerries.every(ferry => ferry.capacity === ferry.vehicles.length);
    setIsFull(allFerriesFull);

    return vehicle;
  }

  return (
    <div>
      <p className="intro">
        {props.intro}
      </p>
      
      <p className="priceboard">{props.priceboard}</p>
      <FaresTable header="Ticket Prices" tableHeader={['No', 'Type', 'Size']} fares={vehiclesPriceList}/>
     
      <p className="ferryInfo">{props.ferryInfo}</p>
      <div className="boatsTable">
      {ferryElement}
      </div>

      <div className="btnDiv">
        <button onClick={onClick} className="btn btn-success" disabled={isFull}>Get Random Vehicle</button>
      </div>
      
      
      {isFull && <h5 className="isFull">{props.isFull}</h5>}
      
      
      <Earnings terminalEarnings={terminalEarnings}/>
        
        {/* Used 3rd party library to show notifications */}
       <ToastContainer /> 
    </div>
  );
};
