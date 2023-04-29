
const Category=require("../models/category")

exports.getCategoryById=(req,res,next,id)=>{
    
    Category.findById(id).then((category,err)=>{
        if(err){
            return res.status(400).json({
                error: "Category not found in database"
            })
        }
        //otherwise return the desired category
        req.category=category;
        next();
    })
}

exports.createCategory=(req,res)=>{

    const category=new Category(req.body);
   
    category.save().then((cate,err)=>{
        
        if(err){
            return res.status(400).json({
                error:"Couldn't create category"
            })
        }
      
        res.json({cate});
    }).catch(err =>console.log("Duplicate exists cant create this category"))
}


exports.getCategory=(req,res)=>{   
    return res.json(req.category);
}


exports.removeCategory=(req,res)=>{
   
    const category = req.category;
    if(category !== null) {
        category.remove((err,category) => {
            if (err){
                res.status(400).json({
                    error: "Failed to delete this Category"
                });
            }
    
            res.json({
                message: "Successfully deleted "
            })
         })
    }
     
}

// update category method
exports.updateCategory=(req,res)=> {
    const category = req.category;
    category.name = req.body.name;
    category.subcategory=req.body.subcategory;

    category.save().then((updatedCategory,err)=>{
        if (err){
            res.status(400).json({
                error: "Failed to update Category"
            });
        }
         
        res.json(updatedCategory);
    }) 
} 

// get all categories
exports.getAllcategory = (req,res) => {
    
    Category.find().then((categories,err)=>{
        if(err){
            return res.status(400).json({
                error: "No categories found"
            });
        }

        res.json(categories);
    })  
} 

exports.getAllSubCategory = (req,res) => {
    const category  = req.category;
    res.json(category.subcategory)
}

