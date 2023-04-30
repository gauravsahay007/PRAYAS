var express =require("express");
var router=express.Router();
const {isAuthenticated,isAdmin, isSignedIn}=require("../controllers/auth");
const { getAllevents,getEvent,getEventById, updateEvent,Eventphoto,createEvent,deleteEvent} = require("../controllers/events");
 
const {getUserById} = require("../controllers/users");

// param fired up when detects :userId in the route
router.param("userId",getUserById);
router.param("eventId",getEventById);



router.post("/event/create/:userId",isSignedIn,isAuthenticated,isAdmin,createEvent);


router.get("/event/:eventId",isSignedIn,getEvent) 
router.get("/events",getAllevents)

// update event
router.put("/event/update/:userId/:eventId",isSignedIn,isAuthenticated,isAdmin,updateEvent);
router.get("/event/photo/:eventId",Eventphoto);

router.delete("/event/delete/:userId/:eventId",isSignedIn,isAuthenticated,isAdmin,deleteEvent)



module.exports=router;