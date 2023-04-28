var express =require("express");
var router=express.Router();
const {isAuthenticated,isAdmin, isSignedIn}=require("../controllers/auth");
const { getAllevents,getEvent,getEventById, updateEvent,Eventphoto } = require("../controllers/events");

// param fired up when detects :userId in the route
router.param("userId",getEventById);


// get user
router.get("/user/:userId",isSignedIn,isAuthenticated,isAdmin,getEvent);

// get all users
router.get("/users/:userId",isSignedIn,isAuthenticated,isAdmin,getAllevents)

// update user
router.put("/user/:userId",isSignedIn,isAuthenticated,isAdmin,updateEvent)
router.get("/event/photo/:eventId",Eventphoto);





module.exports=router;