import React, { useState, useEffect, Fragment } from "react";
import { getAllEvents } from "../admin/EventAPI";

import "../styles/Slider.css";
import SliderImagehelper from "./SliderImagehelper"
const Slider = () => {
  const [error,setError]=useState(false);
    const [people,setPeople]=useState([]);

  const loadAllEvents=()=>{
    getAllEvents().then(data=>{
        console.log(data); 
      if(data.error){
        setError(data.error);
      }
      else{
        console.log(data.events);
        setPeople(data.events);
      } 
    })
  }
  useEffect(()=>{ 
    loadAllEvents()
  },[])
  
  
  
  const [index, setIndex] = useState(0);
  
 
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  

  return (
    <section className="section">
      <div className="title">
        <h2>PRAYAS Events</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { name,eventinfo,timeline,id,photo } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
             <SliderImagehelper prod={item}/>
             <p className="text"><h1>{name}</h1></p>
           <div className="description">
          
              <p className="text"> {eventinfo}</p>
              <p className="text"> {timeline}</p>
           </div>
             
            
            
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
};

export default Slider;

