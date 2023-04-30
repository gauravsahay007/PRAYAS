import React from 'react'
import Menu from '../core/Menu'
import pen from "../pen.jpg"
import "../styles/suborganize.css"
// import meals from "../meals_served.png"
// import s from "../s.jpg"
import { useNavigate } from 'react-router-dom'
export default function Organize4() {
  const navigate=useNavigate();
  return (
    <div>
        <Menu/>
        <h4 className='organize1-h'>Pen is better than a sword.</h4>
        <img src={pen} alt="" className='organize1-im1'/>
        {/* <img height="80px" src={s} alt="" className='organize1-im2'/> */}

        <h4 className='description'> <b> Each pen Cost:</b> ₹10 <br/>
        <b> Stationery Shop:</b> ABC </h4>

        <button onClick={()=>{
        return (navigate("/donate"))
    }} className='Donate'>Donate</button>

    </div>
  )
}
