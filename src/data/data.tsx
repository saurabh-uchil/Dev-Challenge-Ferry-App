import { Fares } from "../types/Fares";

//Different messages for the page.
export const intro: string = "\"Whether you're moving a car, truck, van, or bus, our ferry service provides a safe, efficient, and stress-free way to get your vehicle across the water. With daily departures, easy booking, and experienced crew, we make transporting your vehicle simple. Whether you're a local, a tourist, or a logistics company — we've got your journey covered.\"";

export const priceboard: string = "Curious about costs? Take a look at our price board to see all current ticket and vehicle fares!";

export const ferryData = "We’ve got two ferries for your ride – a small one that can carry up to 6 vehicles, and a larger one that holds up to 8 vehicles. Choose the one that works best for you!";

export const isFullMessage = "Both ferries are packed at the moment — hang tight for the next ride!!";

//Vehicle Price List
export const vehicleList: Fares[] = [
    {
      type: "car",
      cost: 5.00
    },
    {
      type: "van",
      cost: 7.50
    },
    {
      type: "truck",
      cost: 10.00
    },
    {
      type: "bus",
      cost: 15.00
    }
  ]