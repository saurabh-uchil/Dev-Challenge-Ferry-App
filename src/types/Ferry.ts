import { Vehicle } from "./Vehicle";

export type FerrySize = "small" | "large";

export type FerryType = {
    type: FerrySize,
    capacity: number,
    vehicles: Vehicle[]
}
