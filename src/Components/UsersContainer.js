import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetchusers } from "../redux/users/userActions";

function UsersContainer() {
    const userData = useSelector((state) => state.users);
    console.log(userData)
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchusers());
  }, []);
  return (
    <div>
      <div>
      <h2>Users</h2>
        {userData && userData.users && userData.users.map((user)=><p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
}

export default UsersContainer;
