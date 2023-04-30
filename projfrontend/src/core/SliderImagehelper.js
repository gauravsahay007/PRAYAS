import React from 'react'
import { API } from '../Backend'
import "./SlideImagehelper.css"
const  SliderImagehelper=({prod})=> {
    const  imageurl = prod ? `${API}/event/photo/${prod._id}` : `https://images.pexels.com/photos/2519829/pexels-photo-2519829.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`
  return (
         <img src={imageurl} className="img-helper-slide" alt='img'/>
  )
}

export default SliderImagehelper;