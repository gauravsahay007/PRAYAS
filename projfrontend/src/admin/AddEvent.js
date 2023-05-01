import { useState,useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base"
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { createEvent,getEvent,updateEvent,getEventPhoto,deleteEvent, getAllEvents} from "./EventAPI";

const AddEve=()=>{
    //To add a product an user must be authenticated
    const {user,token}=isAuthenticated();
    const [success,setSuccess]=useState(false);
    // const [error,setError]=useState(false);
    const [values,setValues]=useState({
      name:"",
      eventinfo:"",
      
      timeline: "",
      loading:false,
      error:"",
      createdEvent:"",
      getaRedirect:false,
      formData:"",
  
      
    });
    //destructuring the values 
    const {name,eventinfo,timeline,loading,error,createdEvent,getaRedirect,formData}=values;
    const preload=()=>{
      getAllEvents()
      .then(data=>{
        if(data.error){
          setValues({...values,error:data.error})
        }
        else{
         
          setValues({...values,categories:data,formData:new FormData()});
        }
      })
      
    }
    
  //useeffect is a react hook that lets you synchronize a component with an externa system
  //useEffect(setup,dependencies?)
  //setup code runs when our component is added to the page 
  //
    useEffect(()=>{
  preload();
    },[])
  //handleChange function set a new state for the input
  
    const handleChange=name=>event=>{
  //event.target.files is the entire array of files
      const value=name==="photo" ? event.target.files[0] : event.target.value;
  //set() method of FormData inteface sets a new value for an existing key inside a Formdat Object or adds the key/value if it does not already exist
  //FormData is an interface which provides a way to construct a set of key/value pairs representing form fields and their values
      formData.set(name,value);
      setValues({...values,[name]:value,success:true});
    };
    //On clicking Admin HOme button Link provides a path to go direct home
    const goBack=()=>{
      <Link to="/admin/dashboard">
          <button className='btn'>Admin Home</button>
        </Link>
    }
    const successMessage=()=>{
      if(success){
        return (
            <div className="success">Event Created Successfully!!</div>
        )
    }
    }
    const errorMessage=()=>{
      if(error) {
        return (
            <div className="error">Failed to create Event!!</div>
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
  //preventDefault() method cancels the event if it is cancelable,means default action that belongs to the event will not occur
      console.log("submitted");
     event.preventDefault();
     setValues({...values,error:"",loading:true});
     createEvent(formData,user._id,token)
     .then(data=>{
      console.log(data)
      if(data.error){
        setValues({...values,error:data.error});
  
        setTimeout(()=>{
          setValues({...values,error:""})
        },1000)
      }
      else{
        setValues({
          ...values,
          name:"",
          eventinfo: "",
          timeline:"",
          loading:false,
          createdProduct:data.name
        }
        )
  
        setSuccess(true)
        setTimeout(()=>{
          setSuccess(false)
        },1000)
      }
     });
  
  
  
     
     
    };
  
    const productform=()=>{
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
          EventInfo
        </label>
        <textarea
          onChange={handleChange("eventinfo")}
          name="photo"
          className="form-control"
         
          value={eventinfo}
        />
      </div>
      <label className="label-form">
          TimeLine
        </label>
      <div className="form-group">
      <input
          onChange={handleChange("timeline")}
          name=""
          className="form-control"
         
          value={timeline}
        />
      </div>
    
     
      <button className='submit' onClick={onSubmit}>Submit</button>
  
  </form>
     )
    }
    return(
    
     <Base>
      
       
        {successMessage()}
        {errorMessage()}
        {productform()}
        {goBack()}
       
       
      </Base>
      
    )
  
  }
  const AddEvent = () => {
    return ((isAuthenticated() && isAuthenticated().user.role===1) ? AddEve() : <Navigate to="/"/>)
  }
  export default AddEvent