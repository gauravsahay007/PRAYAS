
import React from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/signup";
import Signin from "./user/signin";
import Faq from "./user/Faq";
import Orgevent from "./core/orgevent";

export default function Routers(){
    return(
 <BrowserRouter>
 <Routes>
 <Route path="/" exact element={<Home/>}/>
 <Route path="/signup" exact element={<Signup/>}/>
 <Route path="/signin" exact element={<Signin/>}/>
 <Route path="/user/faq" exact element={<Faq/>}/>
 <Route path="/signin" exact element={<Signin/>}/>
 <Route path="/oraganiseevent" exact element={<Orgevent/>}/>
 </Routes>
 </BrowserRouter>
     )
}