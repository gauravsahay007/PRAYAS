import React from 'react'
import qr from "../qr.png"
import { useNavigate } from 'react-router-dom';
export default function Donate() {
    const navigate = useNavigate();
  return (
    <div>
        {/* <div className='form'> */}
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
           
          

            <button onClick={()=>{
        return (navigate("/scanner"))
    }} >Scan Here ↓ </button>
    {/* <button>Scan Here ↓ </button> */}

       <div className='qr'>
        <img className='qr1'  src={qr} alt="" />
       </div>
       </form>
       {/* </div > */}
    </div>
  )
}
