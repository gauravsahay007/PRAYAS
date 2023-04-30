import React from 'react'
import qr from "../qr.png"
import "../styles/donate.css"
export default function Scan() {
  return (
    <div className='box'>
        <h3>Scan Here To Contribute</h3>
      <img src={qr} alt="" />
    </div>
  )
}
