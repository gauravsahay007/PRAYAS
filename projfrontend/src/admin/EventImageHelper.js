import React from 'react'
import { API } from '../Backend'
import "./ImageHelper.css"
const  Imagehelper=({prod})=> {
    const  imageurl = prod ? `${API}/event/photo/${prod._id}` : `https://images.pexels.com/photos/2519829/pexels-photo-2519829.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`
  return (
         <img src={imageurl} className="img-helper" alt='img'/>
  )
}

export default Imagehelper;