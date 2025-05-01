export type VehicleSize = "small" | "large";
export type VehicleType = "car" | "van" | "truck" | "bus";

export type Vehicle = {
  size: VehicleSize;
  type: VehicleType;
  cost: number
};

export const getRandomVehicle = (): Vehicle => {
  const randomNumber = Math.floor(Math.random() * 4) + 1;

  switch (randomNumber) {
    case 1: {
      return {
        type: "car",
        size: "small",
        cost: 5.00
      };
    }
    case 2: {
      return {
        type: "van",
        size: "small",
        cost: 7.50
      };
    }
    case 3: {
      return {
        type: "truck",
        size: "large",
        cost: 10.00
      };
    }
    default: {
      return {
        type: "bus",
        size: "large",
        cost: 15.00
      };
    }
  }
};
