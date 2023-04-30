const Event=require("../models/events");
const formidable=require("formidable");
const fs=require("fs");
const _=require("lodash");

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
    req.eventprofile=event;
    next();
    });  
};

exports.getEvent=(req,res)=>{
    req.eventprofile.salt = undefined;
    req.eventprofile.encry_password=undefined;
    req.eventprofile.photo= undefined;
    return res.json(req.profile);
};


exports.Eventphoto = (req, res, next) => {
    if (req.eventprofile.photo) {
        res.set("Content-Type", "image/png");
      return res.send(req.eventprofile.photo.data);
    }
    next();
  };

    exports.getAllevents=(req,res)=>{
        Event.find()
        .select("-photo")
        .then((events,err)=>{
            if(err){
                res.status(400).json({
                    error: "No events found"
                })
            }
    
            res.json({
               events
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

      let newevent=req.eventprofile;

      newevent=_.extend(newevent,fields);

      if(file.photo){
        if(file.photo.size>3000000){
            return res.status(400).json({
                error:"File is too big!"
            });
        }
        newevent.photo.data=fs.readFileSync(file.photo.filepath);
        newevent.photo.contentType=file.photo.type;
      }
      newevent.save().then((use,err)=>{
        res.json(newevent);  
    }).catch(err => console.log(err));
    
});
};
    


exports.deleteEvent=(req,res)=>{
    const prod=req.eventprofile;
//The remove() function is used to remove the documents from the database according to the condition
    prod.deleteOne().then((product,err)=>{
        res.json({
            message:"Deleted successfully",
            product
        });
    }).catch(err=>console.log(err));
}  