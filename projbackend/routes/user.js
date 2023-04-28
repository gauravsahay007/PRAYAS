var express =require("express");
var router=express.Router();
const {isAuthenticated,isAdmin, isSignedIn}=require("../controllers/auth");
const { getAllusers,getUser,getUserById, updateUser,Userphoto } = require("../controllers/users");

// param fired up when detects :userId in the route
router.param("userId",getUserById);


// get user
router.get("/user/:userId",isSignedIn,isAuthenticated,isAdmin,getUser);

// get all users
router.get("/users/:userId",isSignedIn,isAuthenticated,isAdmin,getAllusers)

// update user
router.put("/user/:userId",isSignedIn,isAuthenticated,isAdmin,updateUser)
router.get("/user/photo/:userId",Userphoto); 






module.exports=router;