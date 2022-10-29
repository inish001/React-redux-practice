import { BUY_ICECREAM } from "./iceTypes";

export const buyIcecream = (number =1) => {
  return {
    type: BUY_ICECREAM,
    payload:number
  };
};
