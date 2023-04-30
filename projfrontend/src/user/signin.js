import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Home from "../core/Home"
import "../styles/signin.css"
import { signin } from '../auth/helper'
import { isAuthenticated } from '../auth/helper'
import { authenticate } from '../auth/helper'
import Menu from '../core/Menu'
export default function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading:false,
    Redirect:false
})
const {email, password, error, loading,Redirect} = values;
const {user} = isAuthenticated()
const handleChange = name => event =>{
  setValues({...values, error:false,[name]: event.target.value})
}
const loadingMessage = () => {
  return (
      loading && (
          <div>
              <h1>Loading...</h1>
          </div>
      )
  )
}
const errorMessage = () => {
  return (
      <div style={{display: error? "" : "none"}}>
          <h1>ERROR</h1>
      </div>
  )
}
const onSubmit = event => {
        
  event.preventDefault()
  setValues({...values,error:false,loading:true})
  
  signin({email,password}).then(data => {
      if(data.error){
          setValues({...values,error:data.error,
          loading:false})
      }
      else{
          
          authenticate(data, ()=>{
              setValues({...values, Redirect:true})
          })
      }
  }).catch(err=>{if(err) console.log("Signin Failed")})
}
const performRedirect = (Redirect) => {
  if(Redirect){
      if(user && user.role === 1){
         
          return <Navigate replace to="/admin/dashboard"></Navigate>
      }
      else{
          return <Navigate replace to="/"></Navigate>
      }
  }
  
  if(isAuthenticated()){
      return <Home/>
  }
}
    const signInForm = () => (
        <div className="signup-form">
            <form>
            <h1>Login Form</h1>
         
            
           <div>
            <label for="email">Email</label>
            <input type="text" onChange={handleChange("email")} id="email" placeholder="Enter your email" value={email}/>

           </div>
           <div>
           <label for="password">Password</label>
            <input type="password" onChange={handleChange("password")} id="password" placeholder="Enter password" value={password}/>
            
           </div>
            
            <button onClick={onSubmit} className='submitbutton'>Submit</button>

       
       </form>

        </div>
       
    )
  return (
    <div>
      <Menu/>
         {signInForm()}
         {errorMessage()}
         {loadingMessage()}
         {performRedirect(Redirect)}
    </div>
       
    
  )
}