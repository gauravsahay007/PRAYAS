import React from 'react'
import Menu from '../core/Menu'
import teach from "../teach.jpg"
import "../styles/suborganize.css"
import meals from "../meals_served.png"
import { useNavigate } from 'react-router-dom'
export default function Organize3() {
  const navigate=useNavigate();
  return (
    <div>
        <Menu/>
        <h4 className='organize1-h'>Mid-day Meal has been suggested to have a 
            <br/>positive effect on learning in children in terms of behaviour,
            <br/> cognitive development and school performance.</h4>
        <img src={teach} alt="" className='organize1-im1'/>
        <img src={meals} alt="" className='organize1-im2'/>

        <h4 className='description'> <b> Each Meal Cost:</b> ₹60 <br/>
        <b> Kitchens preparing midday meals:</b> BH3 Mess </h4>

        <button onClick={()=>{
        return (navigate("/donate"))
    }} className='Donate'>Donate</button>

    </div>
  )
}
