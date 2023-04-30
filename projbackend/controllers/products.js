//Creating a controller for product
const Product=require("../models/products")
//importing formidable model for parsing form data,especially file uploads
const formidable=require("formidable");
const fs=require("fs");
const _=require("lodash");


exports.getProductById=(req,res,next,id)=>{
    Product
    .findById(id)
    .populate("category")
    .exec((err,prod)=>{
        if(err){
            return res.status(400).json({
                error:"Product not found"
            });
        }
        req.product=prod;
        next();
    });
}


exports.createProduct=(req,res)=>{
    let form=new formidable.IncomingForm();
    form.keepExtensions=true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error: "There is an issue with attached image"
            })
        }

        
        
        const {name,description,stock,price,category}=fields;
        
        if(!name || !description || !stock || !price || !category){
            return res.status(400).json({
                error: "Please provide all the informations"
            });
        }

        let product=new Product(fields);

        if(file.photo){

            if(file.photo.size>3000000){
                return res.status(400).json({
                    error: "File size is too big"
                });
            }

        product.photo.data= fs.readFileSync(file.photo.filepath);
        product.photo.contentType=file.photo.type;  
        }

        product.save().then((prod,err)=>{
            if(err){
               return res.status(400).json({
                    error:"Product not saved to the database"
                });
            }
            res.json(prod);
        });
});
    
}

exports.getProduct=(req,res)=>{
    req.product.photo=undefined;
    return res.json(req.product);
}



exports.photo = (req, res, next) => {
    if (req.product.photo) {
        res.set("Content-Type", "image/png");
      return res.send(req.product.photo.data);
    }
    next();
  };

exports.deleteProduct=(req,res)=>{
    const prod=req.product;
//The remove() function is used to remove the documents from the database according to the condition
    prod.deleteOne().then((product,err)=>{
        res.json({
            message:"Deleted successfully",
            product
        });
    }).catch(err=>console.log(err));
}

//product updation
//functions same as create product
exports.updateProduct=(req,res)=>{
    let newform=new formidable.IncomingForm();
    newform.keepExtensions=true;
    newform.parse(req,(err,fields,file)=>{
      if(err){
        return res.status(400).json({
            error:"Issue with image to be updated"
        })
      }

      let newproduct=req.product;

    //   _.extend(object, sources)
    // object: This parameter holds the destination object.
    // sources: This parameter holds the source objects.
    // So here fields are copied to newproduct

//_.extend() function creates a copy of all the properties of the source objects over
//the destination object and return destination object  

//syntax:- _.extend(destination, *sources)
//

      newproduct=_.extend(newproduct,fields);

      if(file.photo){
        if(file.photo.size>3000000){
            return res.status(400).json({
                error:"File is too big!"
            });
        }
        newproduct.photo.data=fs.readFileSync(file.photo.path);
        newproduct.photo.contentType=file.photo.type;
      }
    newproduct.save().then((prod,err)=>{
       
        res.json(newproduct);
    }).catch(err => console.log(err));
    
});
};

exports.getAllProducts=(req,res)=>{
    // whenever a query is fired up a ? is shown in the path a
    let cnt=req.query.limit ? parseInt(req.query.limit):8
    let sort=req.query.sort ? req.query.sort: "_id"
    Product
    .find()
    .select("-photo")
    .populate("category")
    .sort([[sort,"asc"]])
    .limit(cnt)
    .exec((err,prod)=>{
        if(err){
            return res.status(400).json({
                error: "No product found"
            })
        }
        res.json(prod)
    })
}



exports.updateStock=(req,res,next)=>{
//map() applies a function to each array element and creates a new array of the returned values.
    let opern=req.body.order.products.map(ele=>{
        return{
//The updateOne() method returns a document that contains some fields. 
            updateOne:{
                filter:{_id:ele._id},
                update:{$inc: {stock:-ele.count,sold: +ele.count}}
            }
        }
    })

    //  With bulkWrite() method multiple documents can be inserted/updated/deleted in one shot

//model.bulkWrite():-
//method to perform multiple operations in one command 
//It can insert multiple documents,can update,replace,delete one or multiple documents
//syntax:- model.bulkwrite(operation,options,callback)

    Product.bulkWrite(opern,{},(err,ele)=>{
        if(err){
          return res.status(400).json({
            error: "Bulk operation failed"
          })  
        }
        next();
    })
}


exports.getAllUniquecategories=(req,res)=>{
//distinct() method finds the distinct values for a given field across a single collection and returns the results in an array

    Product.distinct("category",{},(err,cate)=>{
        if(err){
            return res.status(400).json({
                error:"No catgeory found"
            })
        }
        res.json(cate)
    })
};