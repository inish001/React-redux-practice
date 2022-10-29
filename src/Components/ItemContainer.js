import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIcecream } from "../redux/icecream/iceActions";

function ItemContainer(props) {
  return (
    <div>
      <h2>Items - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIce;

    return{
        item: itemState
    }
};
const mapDispatchToProps =(dispatch,ownProps)=>{
    const itemDispatch = ownProps.cake
    ? ()=> dispatch(buyCake())
    : ()=>dispatch(buyIcecream())

    return{
        buyItem: itemDispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
