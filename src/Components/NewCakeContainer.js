import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function NewCakeContainer() {
    const[number,setNumber] = useState(1)
    const cakes = useSelector((state)=>state.cake.numOfCake)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes {cakes}</h2>
      <input type="text" value={number} onChange ={(e)=>setNumber(e.target.value)} />
      <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cakes</button>
    </div>
  )
}

export default NewCakeContainer
