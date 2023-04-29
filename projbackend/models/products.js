//mongoose is an object data modelling library for mongoDb
//Defining Schema
const mongoose=require("mongoose")


const {ObjectId}=mongoose.Schema;


const productSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:32,
            //trim removes white space 
            trim:true
        },
        description:{
            type:String,
            required:true,
            maxlength:2000,
            trim:true
        },
        price:{
           type:Number ,
           required:true
        },
        category:{

            type: mongoose.Schema.Types.ObjectID,
            required:true,
            maxlength:32,
            ref:"Category", 
            trim:true
        },
        stock:{
            type:Number,
            default:0
        },
        photo:{
            data:Buffer,
            contentType:String
        }
    },

    {timestamps:true}
);
module.exports=mongoose.model("Product",productSchema);