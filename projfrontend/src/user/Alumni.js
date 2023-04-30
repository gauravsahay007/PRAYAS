import React from 'react'
import Menu from '../core/Menu'
import "../styles/Alumni.css"
export default function Alumni() {
  return (
    <div>
        <Menu/>
        <h2 className='welcome-msg'><i class="fas fa-pray"></i> Welcome Senior!! </h2>
        
        <form className='alumni-form'>
            <h1>Let Us Know About You!!</h1>
            <div>
                <label for="name">Name</label>
                
                <input type="text" id="name" placeholder="Enter your name"/>
            </div>
            
           <div>
            <label for="name">Email</label>
            <input type="text" id="name" placeholder="Enter your email"/>

           </div>

           <div>
            <label for="name">Batch</label>
            <input type="number" id="name" placeholder="Enter your graduating year from IIITA"/>

           </div>
          
           <div>
            <label for="">Share Your Story</label>
            <textarea name="message" id="" cols="30" rows="5" placeholder="Here you go!!"></textarea>
           </div>

           <div>
           <label className="label-form">
        Wanna share some photos?
      </label>
        <input
         
          type="file"
          name="photo"
          accept="image"
          className="file-area"
          placeholder="choose a file"
        />
           </div>
            
            <button>Submit</button>

       
       </form>
    </div>
  )
}
