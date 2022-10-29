import { BUY_ICECREAM } from "./iceTypes";

const initialState = {
  numOfIce: 20,
};

const reducer = (state = initialState, action) => {
  // console.log("----- ", action);
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIce: state.numOfIce - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
