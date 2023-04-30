import React from 'react'
import Menu from '../core/Menu'
import teach from "../teach.jpg"
import "../styles/suborganize.css"
import kit from "../kit.jpg"
import { useNavigate } from 'react-router-dom'
export default function Organize3() {
  const navigate=useNavigate();
  return (
    <div>
        <Menu/>
        <h4 className='organize1-h'>A good school bag is an essential part of every child’s life. <br />
         A school bag should be of quality, durable, and withstand wear and tear. <br />
          It should also be secure enough to fit all the books and stationery, which the child likes to carry</h4>
        <img src={teach} alt="" className='organize1-im1'/>
        {/* <img src={kit} alt="" className='organize2-im2'/> */}

        <h4 className='description'> <b> Each Kit Cost:</b> ₹600 <br/>
        <b> Store Providing School Kits</b> Uniform House </h4>

        <button onClick={()=>{
        return (navigate("/donate"))
    }} className='Donate'>Donate</button>

    </div>
  )
}
