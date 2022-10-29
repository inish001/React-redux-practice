import React from "react";
import { buyIcecream } from "../redux/icecream/iceActions";
import { connect } from "react-redux";

function iceContainer(props) {
  return (
    <div>
      <h2>Number Of Icecreams - {props.numOfIce}</h2>
      <button onClick={props.buyIcecream}>Buy Icecreams</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfIce: state.iceCream.numOfIce,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceContainer);
