import React from 'react'
import Menu from '../core/Menu'
import pen from "../pen.jpg"
import "../styles/suborganize.css"
import meals from "../meals_served.png"
export default function Organize4() {
  return (
    <div>
        <Menu/>
        <h4 className='organize1-h'>Pen is better than a sword.</h4>
        <img src={pen} alt="" className='organize1-im1'/>
        <img src={meals} alt="" className='organize1-im2'/>

        <h4 className='description'> <b> Each Meal Cost:</b> ₹60 <br/>
        <b> Kitchens preparing midday meals:</b> BH3 Mess </h4>

       <button className='Donate'>Donate</button>

    </div>
  )
}
