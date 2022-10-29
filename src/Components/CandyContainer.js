import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCandy } from '../redux/candy/candyActions'
// import { buyIcecream } from '../redux/icecream/iceActions'

function CandyContainer() {
    const candy = useSelector(state=>state.candy.numOfCandy)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Candy - {candy}</h2>
      <button onClick={()=>dispatch(buyCandy())}>Buy Candy</button>
    </div>
  )
}


export default CandyContainer
