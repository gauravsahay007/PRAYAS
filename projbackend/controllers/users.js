const User=require("../models/users");
const formidable=require("formidable");
const fs=require("fs");
const _=require("lodash");


exports.getUserById=(req,res,next,id)=>{
    User.findById(id).then((user,err)=>{
    if(err || !user){
        return res.status(400).json({
            error:"Oops...There is not any user of this id in the database"
        });
    }
    req.profile=user;
    next();
    });  
};


exports.getUser=(req,res)=>{
    req.profile.salt = undefined;
    req.profile.encry_password=undefined;
    req.profile.photo= undefined;
    return res.json(req.profile);
};

exports.Userphoto = (req, res, next) => {
    if (req.profile.photo) {
        res.set("Content-Type", "image/png");
      return res.send(req.profile.photo.data);
    }
    next();
  };

    exports.getAllusers=(req,res)=>{
        User.find()
        .select("-photo")
        .then((users,err)=>{
            if(err){
                res.status(400).json({
                    error: "No users found"
                })
            }
    
            res.json({
                users
            })
        })
}

exports.updateUser=(req,res)=>{
    let newform=new formidable.IncomingForm();
    newform.keepExtensions=true;
    newform.parse(req,(err,fields,file)=>{
      if(err){
        return res.status(400).json({
            error:"Issue with image to be updated"
        })
      }

      let newuser=req.profile;

      newuser=_.extend(newuser,fields);

      if(file.photo){
        if(file.photo.size>3000000){
            return res.status(400).json({
                error:"File is too big!"
            });
        }
        newuser.photo.data=fs.readFileSync(file.photo.path);
        newuser.photo.contentType=file.photo.type;
      }
    newuser.save().then((use,err)=>{
        res.json(newuser);
    }).catch(err => console.log(err));
    
});
};
    



