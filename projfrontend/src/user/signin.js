import React from 'react'

// import { Link } from 'react-router-dom';
import "../styles/signin.css"
export default function Signin() {

 

    const signInForm = () => (
        <div className="signup-form">
            <form>
            <h1>Login Form</h1>
         
            
           <div>
            <label for="name">Email</label>
            <input type="text" id="name" placeholder="Enter your email"/>

           </div>
           <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter password"/>
           <div>
            
           </div>
            
            <button>Submit</button>

       
       </form>

        </div>
       
    )
  return (
    <div>
         {signInForm()}
    </div>
       
    
  )
}