import React from 'react'
import "../styles/About.css"
import child from "../child.jpg"
export default function Aboutus() {
  return (
    <div className='comp'>
      
			<div className="image">
<img src={child} alt="background"/>
<figure>
<figcaption className='comptext' style={{ padding: "20px" }}>
    <div className='who'>
        <h1 className='head'>About Us</h1>
        <h4>Providing <strong>Help</strong> • Creating <strong>Hope</strong> • Serving <strong>All</strong></h4>
      </div>
    <div className='mis1'>
        <h1 className='mission'>Our Mission</h1>
        <p>Our mission is to help the needy and most vulnerable of all 
            faiths to permanently improve their lives. We provide supportive services 
            that enable families to rise up out of poverty, overcome barriers, 
            and achieve self-sufficiency and independence.</p>
        </div>
        <div className='vis1'>
            <h1 className='vision'>Our Vision</h1>
            <h3><p>Our mission is to help the needy and most vulnerable of 
             all faiths to permanently improve their lives. We provide 
              supportive services that enable families to rise up out of 
               poverty, overcome barriers, and achieve self-sufficiency and independence.</p></h3>

        </div>

        </figcaption>
        </figure>
</div>	
				
			{/* </div> */}
    </div>
   
  )
}
