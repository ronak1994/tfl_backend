const jwt = require("jsonwebtoken");
const Admin = require('../models/Admin');
const ErrorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next)=>{
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token){
       return next(new ErrorResponse("Not authorized to access this route", 401)) 
    }

    try {
       
       const decode = jwt.verify(token, process.env.JWT_SECRET);
       const admin = await Admin.findById(decode.id);
       if(!admin){
        return next(new ErrorResponse("No user found with this id", 404))
       }
       req.admin = admin;
       next();
    } catch (error) {
        return next(new ErrorResponse("Not Authorized to access this route",401))
    }
}