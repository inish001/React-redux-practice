import { combineReducers } from "redux";
import iceReducer from "./icecream/iceReducer"
import cakeReducer from "./cake/cakeReducer"
import candyReducer from "./candy/candyReducer"
import userReducer from "./users/userReducer"
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream:iceReducer,
    candy:candyReducer,
    users: userReducer
})
export default rootReducer