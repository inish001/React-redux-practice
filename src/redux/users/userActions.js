import { Fetch_failure, Fetch_success, Fetch_users_request } from "./userTypes";
import axios from "axios";
// import { useState } from "react";

// const [user,setUser] = useState("")

export const Fetchusersrequest = () => {
  return {
    type: Fetch_users_request,
  };
};

export const Fetchsuccess = (users) => {
  return {
    type: Fetch_success,
    payload: users,
  };
};

export const Fetchfailure = (error) => {
  return {
    type: Fetch_failure,
    payload: error,
  };
};

export const Fetchusers = () => {
  return (dispatch) => {
    dispatch(Fetchusersrequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(Fetchsuccess(users));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(Fetch_failure(errMsg));
      });
  };
};
const AddUser = (postData) => {
};

export const Postusers = (postData) => {
  // console.log(postData)
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", postData)
      .then((res) => {
        res.data === 201 && dispatch(AddUser(postData));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
