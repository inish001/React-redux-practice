import { BUY_CANDY } from "./candyType";

const initialState = {
  numOfCandy: 10,
};
const reducer = (state = initialState, action) => {
  // console.log("------------", action)
  switch (action.type) {
    case BUY_CANDY:
      return {
        ...state,
        numOfCandy: state.numOfCandy - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
