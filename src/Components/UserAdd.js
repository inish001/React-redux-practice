import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Postusers } from '../redux/users/userActions'

function UserAdd() {
    const[title,setTitle] = useState("")
    const[desc,setDesc] = useState("")
    const dispatch = useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault()
        // console.log(title,desc)
        const postData ={
            title,
            desc
        }
        dispatch(Postusers(postData))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={title} onChange= {(e)=>setTitle(e.target.value)} />
        <label>Description</label>
        <input type="text" value={desc} onChange ={(e)=>setDesc(e.target.value)} />
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default UserAdd
