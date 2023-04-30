
import React from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/signup";
import Signin from "./user/signin";
import Faq from "./user/Faq";
import Events from "./admin/Events";
import Organize from "./user/organize"; 
import Organize1 from "./user/organize1";
import Alumni from "./user/Alumni";
export default function Routers(){
    return(
 <BrowserRouter>
 <Routes>
 <Route path="/" exact element={<Home/>}/>
 <Route path="/signup" exact element={<Signup/>}/>
 <Route path="/signin" exact element={<Signin/>}/>
 <Route path="/user/faq" exact element={<Faq/>}/>
 <Route path="/user/events" exact element={<Events/>}/>
 <Route path="/user/organize/event" exact element={<Organize/>}/>
 <Route path="/user/organize/organize1" exact element={<Organize1/>}/>
 <Route path="/alumni" exact element={<Alumni/>}/>
 
 </Routes>
 </BrowserRouter>
     ) 
}