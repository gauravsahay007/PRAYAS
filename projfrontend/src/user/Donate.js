import React from 'react'
import qr from "../qr.png"
export default function Donate() {
  return (
    <div>
        <div className='form'>
      <form>
            <h1>Donation Form</h1>
            <div>
                <label for="name">Name</label>
                
                <input type="text" id="name" placeholder="Enter your name"/>
            </div>
            
           <div>
            <label for="name">Email</label>
            <input type="text" id="name" placeholder="Enter your email"/>

           </div>
           <div>
            <label for="name">Contact</label>
            <input type="text" id="name" placeholder="Enter your contact"/>

           </div>
           
          

            <button>Submit</button>

       </form>
       </div >
       <div className='qr'>
        <img className='qr1'  src={qr} alt="" />
       </div>
    </div>
  )
}
