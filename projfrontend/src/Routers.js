
import React from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/signup";
import Signin from "./user/signin";
import Faq from "./user/Faq";
import Orgevent from "./core/orgevent";

import Events from "./admin/Events";
import Organize from "./user/organize"; 
import Organize1 from "./user/organize1";
import Organize2 from "./user/organise2";
import Organize3 from "./user/organise3";
import Organize4 from "./user/organise4";
import Alumni from "./user/Alumni";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategory";
import AddProduct from "./admin/AddProduct";
import ManageProduct from "./admin/ManageProduct";
import UpdateCategory from "./admin/UpdateCategory";
import UpdateProduct from "./admin/UpdateProduct";
import Scan from "./user/scan";
import AdminDashboard from "./user/AdminDashboard";
import Aboutus from "./core/Aboutus";
import Donate from "./user/Donate";
import Merch from "./core/Merch";
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
 <Route path="/user/events" exact element={<Events/>}/>
 <Route path="/user/organize/event" exact element={<Organize/>}/>
 <Route path="/user/organize/organize1" exact element={<Organize1/>}/>
 <Route path="/user/organize/organize2" exact element={<Organize2/>}/>
 <Route path="/user/organize/organize3" exact element={<Organize3/>}/>
 <Route path="/user/merch" exact element={<Merch/>}/>

 <Route path="/user/organize/organize4" exact element={<Organize4/>}/>
 <Route path="/donate" exact element={<Donate/>}/>
 <Route path="/alumni" exact element={<Alumni/>}/>
 <Route path="/scanner" exact element={<Scan/>}/>
 <Route path="/admin/create/category" exact element={<AddCategory/>}></Route>

<Route path="/admin/category" exact element={<ManageCategories/>}></Route>
<Route path="/admin/product/create" exact element={<AddProduct/>}></Route>
<Route path="/admin/product" exact element={<ManageProduct/>}></Route>
<Route path="/admin/dashboard" exact element={<AdminDashboard/>}></Route>

<Route path="/admin/category/:categoryId" exact element={<UpdateCategory/>}></Route>

<Route path="/admin/product/update/:productId/:userId" exact element={<UpdateProduct/>}></Route>
<Route path="/about" exact element={<Aboutus/>}></Route>

 </Routes>
 </BrowserRouter>
     ) 
}