import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIcecream } from '../redux/icecream/iceActions'

function NewIceContainer() {
    const IceCreams = useSelector((state)=>state.iceCream.numOfIce)
    const dispatch = useDispatch()
    const[number,setNumber] = useState(1) 
  return (
    <div>
      <h2>Number of IceCreams {IceCreams}</h2>
      <input type="text" value={number} onChange ={(e)=>setNumber(e.target.value)} />
      <button onClick={()=>dispatch(buyIcecream(number))}>Buy {number} IceCreams</button>
    </div>
  )
}

export default NewIceContainer
