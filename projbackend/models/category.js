const mongoose=require("mongoose");


const {ObjectId} = mongoose.Schema;

const categorySchema=new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true,
            maxlength:32,
            unique:true
        },

        subcategory:
        {type:Array,
           default:[] 
        }
    },
    {timestamps:true}
);


module.exports=mongoose.model("Category",categorySchema);