import "./App.css";
import { FerryTerminal } from "./components/FerryTerminal.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { ferryData, intro, isFullMessage, priceboard } from "./data/data.tsx";

function App() {
  const about = intro;
  const price = priceboard;
  const ferryInfo = ferryData;
  const isFull = isFullMessage;
  return (
    <>
      <Navbar title="My Ferry Center"/>
      <div className="solution">
        <FerryTerminal intro={about} priceboard={price} ferryInfo={ferryInfo} isFull={isFull}/>
      </div>
    </>
  );
}

export default App;
