const Admin = require('../models/Admin');

exports.getList=async(req,res,next)=>{
    try {
        const admin = await Admin.find({})
        res.status(200).json(admin);
   
    } catch (error) {
        res.status(201).json(error);
    }
}

exports.deleteAdmin=async(req,res,next)=>{
    try {
        const isDeleted = await Admin.deleteOne(req.body)
        res.status(200).json({"success":true,"Message":"Admin Deleted"});
   
    } catch (error) {
        res.status(201).json(error);
    }
}

exports.getAdminById=async(req,res,next)=>{
   try {
        const admin = await Admin.find({_id:req.query.id},{_id:0,createdAt:0,updatedAt:0})
        res.status(200).json(admin);
   
    } catch (error) {
        res.status(201).json(error);
    }
}

exports.updateAdmin=async(req,res,next)=>{
    try {
         const admin = await Admin.updateOne({_id:req.body._id},{$set:req.body});
         res.status(200).json(admin);
    
     } catch (error) {
         res.status(201).json(error);
     }
 }
 