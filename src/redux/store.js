import { createStore } from "redux";
// import reducer from "./cake/cakeReducer";
// const store = createStore(reducer);

import rootReducer from "./rootReducer";       // for combined reducers
// import logger from "redux-logger";  
import { applyMiddleware } from "redux"; 
import {composeWithDevTools} from "redux-devtools-extension"  
import thunk from "redux-thunk";


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))


export default store;
