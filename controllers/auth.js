const Admin = require('../models/Admin');
const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req,res,next) =>{
    const {firstname, lastname, email, phone_number, password } = req.body;
 
     try {
        const admin = await Admin.create({
            firstname, lastname, email, phone_number,password
        })
        sendToken(admin, 200,res );

    } catch (error) {
        res.status(201).json(error);
    }
};

exports.login = async (req,res,next) =>{
    const {email, password} = req.body;

    if(!email || !password){
        return  res.status(400).json({'message':'provide email & password'});
    }

    try{
      const admin = await Admin.findOne({email}).select("+password");
      if(!admin){
        return res.status(401).json({
            success:false,
            error: 'User Not found'
        });
       }

      const isMatch = await admin.matchPassword(password);

      if(!isMatch){
       return res.status(201).json({
            success:false,
            error: 'Invalid credentails'
        }).send();
      }
      sendToken(admin, 201,res);

      }catch(error){
       return res.status(500).json({
            success:false,
            error: error.message
        });
    
    }
};


const sendToken = (user, statusCode, res) =>{
    const token = user.getSignedToken();
   // const decode = jwt.verify(token, process.env.JWT_SECRET);
    res.status(statusCode).json({
        success:true,
        token
    }) 
}

