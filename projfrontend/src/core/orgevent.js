import React from 'react'
import "../styles/orgevent.css"
export default function Orgevent() {
  return (
    <form>
    <h1>Event Registration Form</h1>
    <div>
        <label for="name">Name</label>
        
        <input type="text" id="name" placeholder="Enter your name"/>
    </div>
    
   <div>
    <label for="name">Email</label>
    <input type="text" id="name" placeholder="Enter your email"/>

   </div>
  
   <div>
    <label for="message">Location</label>
    <textarea name="message" id="" cols="" rows="5" placeholder="Enter location where you want to organise event..."></textarea>
   </div>
    
    <button>Submit</button>


</form>
  )
}