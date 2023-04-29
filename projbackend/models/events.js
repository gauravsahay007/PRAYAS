const mongoose=require("mongoose");
mongoose.set('strictQuery', true); 
var Schema = mongoose.Schema;

var eventSchema = new Schema({
   name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
   },

   eventinfo: {
    type: String,
    trim: true
   },

   timeline: {
    type: Date,
    trim: true
   },

   photo:{
    data:Buffer,
    contentType:String
},

  

  },{timestamps: true});

 
module.exports=mongoose.model("Events",eventSchema);