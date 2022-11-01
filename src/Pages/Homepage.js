import React,{useState} from 'react'
import {v4} from 'uuid'



function Homepage() {
  const [ID,setID]=useState();
  const [username,setUsername]=useState();
  const generateID=(e)=>{


e.preventDefault();
const id=v4();
setID(id);
  }


  return (
    <div className='wrapper'>




      <div>Write your invitation code and username</div>
<h5>Invitation Code</h5>
      <span><input className='inviteCode' placeholder='Enter Invite Code' onChange={(e)=>{
        setID(e.target.value);
      }}value={ID}></input></span>
      <h5>Username</h5>
      <input  className='username' placeholder='Username' 
      onChange={(e)=>{
        setUsername(e.target.value)}} value={username}></input>
<div> <button className='joinButton'>Join</button></div>
      <div>To generate invite code click <a onClick={generateID}href="">Here</a></div>
      <footer>Made with ♥‿♥ by Harsh</footer>
    </div>
  )
}

export default Homepage