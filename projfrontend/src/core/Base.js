import React from 'react'
import Menu from './Menu'
import "../styles/base.css";
import twitter from "../twitter.png"
import fb from "../facebook.png"
import ig from "../instagram.png"
export default function Base() {
  return (
    <div>
      =
      <div className='complete'>
        <div className='f1'>
          <ul>
            <li><h2>Find Us</h2></li>
            <li>211015</li>
            <li>Prayagraj, UP</li>
            <br/>
            <hr />
            <br />
            <li><h2>Call Us</h2></li>
            <li>+91-1234567890</li>
            <li>+91-1298767890</li>
            <li>+91-1287654390</li>
          </ul>
        
        </div>
        <div ><ul className='ul2'>
            <a href=" ">
              <img src={twitter} alt="" />
            </a>
            <a href=" ">
              <img src={fb} alt="" />
            </a>
            <a href=" ">
              <img src={ig} alt="" />
            </a>
          </ul>
          <div className='subs'>
            <h3>Subscribe to our Newsletter</h3>
            <textarea name="text" id="subscribe" cols="" rows="" placeholder='Enter your email'></textarea>
          </div>
          </div>
        <div className='f2'>
          <ul>
            <li>
              <h2>Company</h2>
              <li>About Us</li>
              <li>Conatct Us</li>
              <li>Terms of service</li>
              <li>Privacy Policy</li>
            </li>
          </ul>
        </div>
        
        
      </div>

    </div>
  )
}
