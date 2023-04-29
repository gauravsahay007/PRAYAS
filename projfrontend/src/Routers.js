
import React from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./core/Home";
export default function Routers(){
    return(
 <BrowserRouter>
 <Routes>
 <Route path="/" exact element={<Home/>}/>
 
 </Routes>
 </BrowserRouter>
     )
}