import React from 'react'
import { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import "../styles/signup.css"
import { signup,isAuthenticated } from '../auth/helper'
export default function Signup() {
    const navigate= useNavigate();
   //To add a product an user must be authenticated
  const [error,setError]=useState(false);
  const [success,setSuccess]=useState(false);
  // const [error,setError]=useState(false);
  const [values,setValues]=useState({
    name:"",
    email:"",
    photo:"",
    password:"",
  

    formData:new FormData(),

    
  });
  //destructuring the values 
  const {name,email,password,formData}=values;
  

 

  const handleChange=name=>event=>{

    const value=name==="photo" ? event.target.files[0] : event.target.value;

    formData.set(name,value);
    setValues({...values,[name]:value,success:true});
  };
 
 
  const successMessage=()=>{
    if(success){
     
        <div className="success">Succesfully signed Up</div>
  }
  }
  const errorMessage=()=>{
    if(error) {
      return (
          <div className="error">Failed to create product!!</div>
      )
  }
  }

  useEffect(()=>{
    successMessage()
  },[success])

  useEffect(()=>{
    errorMessage() 
  },[error])

  const onSubmit=event=>{

    console.log("submitted");
   event.preventDefault();
   setValues({...values,error:"",loading:true});
   signup(formData)
   .then(data=>{
    console.log(data)
    if(data.error){
      setValues({...values,error:data.error});

      setTimeout(()=>{
        setValues({...values,error:""})
      },1000)
    }
    else{
        navigate("/");
      setValues({
        ...values,
        name:"",
       email:"",
       password:""
      }
      )

      

      setSuccess(true) 
      
      setTimeout(()=>{
        setSuccess(false)
      },1000)
    }
   });



   
   
  };

  const userform=()=>{
   return(
    <form className="product-form">
   
    <div className="form-group">
      <label className="label-form">
        Choose Photo
      </label>
        <input
          onChange={handleChange("photo")}
          type="file"
          name="photo"
          accept="image"
          className="file-area"
          placeholder="choose a file"
        />
     
    </div>
    <div className="form-group">
    <label className="label-form">
        Name
      </label>
      <input
        onChange={handleChange("name")}
        name="photo"
        className="form-control"
       
        value={name}
      />
    </div>
    <div className="form-group">
    <label className="label-form">
        Email
      </label>
      <input
        onChange={handleChange("email")}
        type="text"
        className="form-control"
     
        value={email}
      />
    </div>
    <label className="label-form">
        Password
      </label>
    <div className="form-group">
      <input
        onChange={handleChange("password")}
        type="text"
        className="form-control"
     
        value={password}
      />
    </div>
   
    
    
    <button className='submit' onClick={onSubmit}>Submit</button>

</form>
   )
  }
  return(
  
  <div>
     {successMessage()}
     
     {userform()}
  </div>
     
     
     
     
    
  )

}
