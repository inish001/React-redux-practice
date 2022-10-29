import { Fetch_failure, Fetch_success, Fetch_users_request ,Post_Users } from "./userTypes";

const initialState = {
  type :{
  loading: true,
  users: [],
  error: "",
  }
};

const reducer = (state =initialState, action) => {
  switch (action.type) {
    case Fetch_users_request:
      return {
        ...state,
        loading: true, 
      };
    case Fetch_success:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case Fetch_failure:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
      case Post_Users:
        return{
          ...state,
          loading:false,
          error:false
        }
    default:
      return state;
  }
};
 export default reducer
