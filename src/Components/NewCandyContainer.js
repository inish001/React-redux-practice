import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCandy } from "../redux/candy/candyActions";

function NewCandyContainer() {
  const [number, setNumber] = useState(1);
  const candy = useSelector((state) => state.candy.numOfCandy);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Candies {candy}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCandy(number))}>Buy Candies</button>
    </div>
  );
}

export default NewCandyContainer;
