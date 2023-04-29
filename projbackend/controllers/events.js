const Event=require("../models/events");

exports.createEvent = (req,res) =>{

    
    let form=new formidable.IncomingForm();
    form.keepExtensions=true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error: "There is an issue with attached image"
            })
        }

        
        
        const {name,eventinfo,timeline}=fields;
        
        if(!name || !eventinfo || !timeline){
            return res.status(400).json({
                error: "Please provide all the informations"
            });
        }

        let event=new Event(fields);

        if(file.photo){

            if(file.photo.size>3000000){
                return res.status(400).json({
                    error: "File size is too big"
                });
            }

        event.photo.data= fs.readFileSync(file.photo.filepath);
        event.photo.contentType=file.photo.type;  
        }

        event.save().then((prod,err)=>{
            if(err){
               return res.status(400).json({
                    error:"User not saved to the database"
                });
            }
            res.json(prod);
        });
});


}

exports.getEventById=(req,res,next,id)=>{
    Event.findById(id).then((event,err)=>{
    if(err || !event){
        return res.status(400).json({
            error:"Oops...There is not any user of this id in the database"
        });
    }
    req.profile=event;
    next();
    });  
};

exports.getEvent=(req,res)=>{
    req.profile.salt = undefined;
    req.profile.encry_password=undefined;
    req.profile.photo= undefined;
    return res.json(req.profile);
};


exports.Eventphoto = (req, res, next) => {
    if (req.profile.photo) {
        res.set("Content-Type", "image/png");
      return res.send(req.profile.photo.data);
    }
    next();
  };

    exports.getAllevents=(req,res)=>{
        Event.find()
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

exports.updateEvent=(req,res)=>{
    let newform=new formidable.IncomingForm();
    newform.keepExtensions=true;
    newform.parse(req,(err,fields,file)=>{
      if(err){
        return res.status(400).json({
            error:"Issue with image to be updated"
        })
      }

      let newevent=req.profile;

      newevent=_.extend(newevent,fields);

      if(file.photo){
        if(file.photo.size>3000000){
            return res.status(400).json({
                error:"File is too big!"
            });
        }
        newevent.photo.data=fs.readFileSync(file.photo.path);
        newevent.photo.contentType=file.photo.type;
      }
      newevent.save().then((use,err)=>{
        res.json(newevent);
    }).catch(err => console.log(err));
    
});
};
    


