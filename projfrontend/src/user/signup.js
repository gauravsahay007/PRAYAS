import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import "../styles/signup.css"
import { signup } from '../auth/helper'
export default function Signup() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })
    const {name, email, password, success, error} = values;
    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }
    const onSubmit = event => {
        // to avoid auto submit
        event.preventDefault()

        setValues({...values, error: false})

        signup({name,email,password}).then(data => {
            if(data.error){
                setValues({...values,error:data.error,
                success:false})
            }
            else{
                setValues({...values,
                        name:"",
                    password:"",
                error:"",
            success:true})
            }
        }).catch(err=>{if(err) console.log("Signup Failed")})
    }
    const errorMessage=()=>{
        return(
            <div className="error:alert" style={{display:error ? " " : "none"}}>
                <h1>{error}</h1>
            </div>
        )
    }
    const successMessage=()=>{
        return(
            <div className="success:alert" style={{display:success ? " " : "none"}}>
                <h1>SignedUp Successfully</h1>
                <h3><Link to="/signin">Login here</Link></h3>
            </div>
        )
    }
    const signUpForm = () => (
        <div className="signup-form">
            <form className=''>
            <h1>SignUp Form</h1>
            <div>
                <label for="name">Name</label>
                
                <input type="text" onChange={handleChange("name")} id="name" placeholder="Enter your name"/>
            </div>
            
           <div>
            <label for="name">Email</label>
            <input type="text" onChange={handleChange("email")} id="name" placeholder="Enter your email"/>

           </div>
           <label for="password">Password</label>
            <input type="password" onChange={handleChange("password")} id="password" placeholder="Enter password"/>
           <div>
            
           </div>
            
            <button onClick={onSubmit} className='submitbutton'>Submit</button>

       
       </form>

        </div>
       
    )
  return (
    <div>
         {signUpForm()}
         {errorMessage}
         {successMessage}
    </div>
       
    
  )
}