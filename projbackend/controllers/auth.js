
const User = require("../models/users");
var jwt = require("jsonwebtoken")

const { expressjwt: expressJwt } = require("express-jwt")

// express-validator contains chain of custom middlewares for validation of a thing if it is validated validationResult extracts the valiation errors of an express request
// check-> creates a valiation chain for one or more fields
// validationResult: extracts the validation errors of an express request
const {check, validationResult} = require("express-validator");
//importing formidable model for parsing form data,especially file uploads
const formidable=require("formidable");
const fs=require("fs");
const _=require("lodash");




// UserSignUp method and logic

exports.signup = (req,res) =>{

    
    let form=new formidable.IncomingForm();
    form.keepExtensions=true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error: "There is an issue with attached image"
            })
        }

        
        
        const {name,email,password}=fields;
        
        if(!name || !email || !password){
            return res.status(400).json({
                error: "Please provide all the informations"
            });
        }

        let user=new User(fields);

        if(file.photo){

            if(file.photo.size>3000000){
                return res.status(400).json({
                    error: "File size is too big"
                });
            }

        user.photo.data= fs.readFileSync(file.photo.filepath);
        user.photo.contentType=file.photo.type;  
        }

        const errors =validationResult(user);

        if(!errors.isEmpty()){
        return res.status(422).json({
            error : errors.array()[0].msg
        });
        }

        user.save().then((prod,err)=>{
            if(err){
               return res.status(400).json({
                    error:"User not saved to the database"
                });
            }
            res.json(prod);
        });
});


}

    // SignIn
    exports.signin = (req,res) => {
        const errors = validationResult(req);

        // destructuring email and password from the request body made by user
        const {email, password} = req.body;

        if(!errors.isEmpty()){
            res.status(422).json({
                // get validation error string as an array
                error: errors.array()[0]
            })
        }


        // else
        // MongoDB findOne() method returns only one document that satisfies the criteria entered. If the criteria entered matches for more than one document, the method returns only one document according to natural ordering, which reflects the order in which the documents are stored in the database.

        // MongoDB findOne() syntax is: db.collection.findOne(<criteria>, <projection>) 
        
        // criteria - specifies the selection criteria entered.

        //  projection - specifies the list of fields to be displayed in the returned document. 

        User.findOne({email}).then((user,err)=> {
            if(err){
                res.status(400).json({
                    error: "User email doesnot exists"
                })
            }

            // .authenticate is a custom method created at user.js models
            // Authentication: Process of verifying a user's identification through the acquisition of credentials and using DATABASE credentials to confirm user identity
            if(!user.authenticate(password)){
                return res.status(401).json({
                    error : "Email and password donot match"
                })
            }

            // JSON WEB TOKENS are RFC 7519 open industry standard for representing claims between two parties
            // JWT specifies a compact and self contained method for communicating information as a JSON object between two parties
            // It can be signed using SECRET

            // In authentication, when the user successfully logs in using their credentials, a JSON webtoken will be returned, Since tokens are credentials (in the below case the credential is user.id) great care must be taken to prevent security issue,
            // Whenever the user wants to access a protected route or resource the user agent should send a JWT, in "Authorisation header" usinf the bearer schema
            // Bearer <token> method sets a number of requirementss to keep authorization secure eg requiring the use of HTTPS

            // Create a JWT TOKEN
            // here {_id: user._id} is Payload which can be string/object/Buffer  and process.env.SECRET is the secret key to encrypt
            const token = jwt.sign({_id: user._id},process.env.SECRET)

            // put token in cookie 
            
            res.cookie("token",token,{expire: new Date()+9999})

            // send response to front end
            const { _id,name,email ,role} = user;
            return res.json({
                token,
                user:{_id,name,email,role}
            })
        })
    }
  
   
    exports.isSignedIn = expressJwt({
        // Now in expressJwt first we pass the same SECRET we used to create the token
        // secret: jwt.Secret | GetVerificationKey (required): The secret as a string or a function to "retrieve" the secret.
        secret: process.env.SECRET,
        algorithms: ["HS256"],
        // requestProperty?: string (optional): Name of the property in the request object where the payload is set. Default to req.auth
        userProperty: "auth"

        // expressJwt automatically verifies the token
    })
    //Creating a middleware to check if the user is authorized or not
    // a boolean value that indicates whether the current user is authenticated (logged in).
    exports.isAuthenticated=(req,res,next)=>{
      
        const check=req.profile && req.auth && req.profile._id==req.auth._id;
        //if it returns false then return error status 403
        // JSON status code 403 :- 403—Forbidden; The account associated with the project that owns the bucket or object has been disabled.
        if(check==false){
            return res.status(403).json({
                error:"User doesn't exist: Access Denied"
            })
        }
       
        next();
    }


    //creating a middleware to check if the user is admin or not 
    exports.isAdmin=(req,res,next)=>{
        if(req.profile.role==0){
            return res.status(403).json({
                error: "You are not an admin"
            })
        }
      
        next();
    };

