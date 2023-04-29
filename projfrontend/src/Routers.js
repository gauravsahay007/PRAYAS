
import React from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/signup";
import Signin from "./user/signin";
export default function Routers(){
    return(
 <BrowserRouter>
 <Routes>
 <Route path="/" exact element={<Home/>}/>
 <Route path="/signup" exact element={<Signup/>}/>
 <Route path="/signin" exact element={<Signin/>}/>
 </Routes>
 </BrowserRouter>
     )
}