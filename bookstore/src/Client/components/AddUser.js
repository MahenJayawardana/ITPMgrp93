import React, { useState } from 'react'
import Axios  from 'axios'
function AddUser(){
    const[LUKName,setLUKName]=useState('')
    const[LUKShop,setLUKShop]=useState('')
    const[LUKAddresss,setLUKAddress]=useState('')
    const[LUKDescription,setLUKDescription]=useState('')
    const[LUKEmail,setLUKEmail]=useState('')

    const addUser = async(event)=>{
        Axios.post('http://localhost:3001/luk/save',{
            LUKName:event.target[0].value,
            LUKShop:event.target[1].value,
            LUKAddresss:event.target[2].value,
            LUKDescription:event.target[3].value,
            LUKEmail: event.target[4].value,

        }).then((response)=>{
            alert("added");

        })
        console.log({LUKName:LUKName,LUKShop:LUKShop,LUKAddresss:LUKAddresss,LUKDescription:LUKDescription,LUKEmail:LUKEmail})

    }
  return (
    <div className='container'>
        <form  onSubmit={addUser}>
  <div class="mb-3">
    <label for="Name" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>{setLUKName(event.target.value)}}/>
    <div id="Name" class="form-text">Write down your full name</div>
  </div>
  <div class="mb-3">
    <label for="Shop" class="form-label">Shop</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>{setLUKShop(event.target.value)}}/>
    <div id="Shop" class="form-text">Write down your shop name</div>
  </div>
  <div class="mb-3">
    <label for="Address" class="form-label">Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>{setLUKAddress(event.target.value)}}/>
    <div id="address" class="form-text">Write down your shop address.</div>
  </div>
  <div class="mb-3">
  <label for="Description" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(event)=>{setLUKDescription(event.target.value)}}></textarea>
</div>
<div class="mb-3">
  <label for="Email" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(event)=>{LUKEmail(event.target.value)}}/>
</div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddUser