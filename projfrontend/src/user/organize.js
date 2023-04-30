import React from 'react'
import Menu from '../core/Menu'
import { useNavigate } from 'react-router-dom'
import mid_day from "../feedfood.png"
import breakfast from "../breakfast.jpg"
import pen from "../pen.jpg"
import teach from "../teach.jpg"
import "../styles/organize.css"
import organize1 from './organize1'
export default function Organize() {
    const navigate = useNavigate();
  return (
    <div>
        <Menu/>
        

            <div className="rowO">
            <button className='tap-btn' >
        <img src={breakfast} alt="" />
        <p>Organize a breakfast 
        </p>
    </button>
    <button className='helpus' onClick={()=>{
        return (navigate("/user/organize/organize1"))
    }}>
    Organize
    </button>
            </div>

            <div className="schemes">
            <div className="rowO">
            <button className='tap-btn'>
        <img src={mid_day} alt="" />
        <p>Organize a mid-day meal</p>
    </button>

    <button className='helpus'  onClick={()=>{
        return (navigate("/user/organize/organize2"))
    }}>
    Organize
    </button>
            </div>
   
   <div className="rowO">
   <button className='tap-btn'>
        <img src={teach} alt="" />
        <p>Donate for School kits</p>
    </button>
    <button className='helpus'  onClick={()=>{
        return (navigate("/user/organize/organize3"))
    }}>
    Organize
    </button>
   </div>

   <div className="rowO">
   <button className='tap-btn'>
        <img src={pen} alt="" />
        <p>Organize stationary distribution</p>
    </button>
    <button className='helpus'  onClick={()=>{
        return (navigate("/user/organize/organize"))
    }}>
        Organize
    </button>
   </div>
   
   
   
        </div>
    </div>
  )
}
