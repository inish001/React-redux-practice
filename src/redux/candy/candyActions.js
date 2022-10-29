import { BUY_CANDY } from "./candyType";

export const buyCandy = (number = 1) => {
  return {
    type: BUY_CANDY,
    payload:number
  };
};
