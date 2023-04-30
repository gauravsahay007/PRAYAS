import React,{Fragment, useEffect,useState} from 'react'
import Menu from '../core/Menu'
import { getAllEvents } from './EventAPI'
import EventImageHelper from "./EventImageHelper"
import "./Events.css"
export default function Events() {
    const [error,setError]=useState(false);
    const [events,setEvents]=useState([]);

  const loadAllEvents=()=>{
    getAllEvents().then(data=>{
        console.log(data);
      if(data.error){
        setError(data.error);
      }
      else{
        setEvents(data.events);
      }
    })
  }
  useEffect(()=>{ 
    loadAllEvents()
  },[])

  return (
    <div>
        <div className="grid-collection-event">
        <Menu/>
       {events.map((prod,index)=>{
           return (
            <Fragment className="album">
               
               <div key={index}  className="product">
                 
                 
                 <div className="image-container">
                 <EventImageHelper prod={prod}/>
                 
                 </div>
                <div className="container">
                <div className="name">
                       <h1> {prod.name}</h1>
                       <p >{prod.eventinfo}</p>
               
                    </div>

                 </div>   
                    
              
                
               </div>
               </Fragment>
              
           )
       })}
   </div>

        
    </div>
  )
}
