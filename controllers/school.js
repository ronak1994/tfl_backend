const School = require('../models/School');

exports.register = async (req,res,next) =>{
  let temp = {
    enabled:true,
    payment_status:'pending',
    approval_date:'',
    registration_date:new Date().toLocaleDateString(),
    status:"pending",
    school_id: "PPLS"+Date.now().toString().slice(-6)
    }
    const final_object = {...req.body,...temp};
    try {
        const school = await School.create(final_object)
        res.status(200).json({success:true,school_id:temp.school_id});
   
    } catch (error) {
        res.status(201).json(error);
    }
};

exports.getList=async(req,res,next)=>{

    try {
        const schools = await School.find({})
        res.status(200).json(schools);
   
    } catch (error) {
        res.status(201).json(error);
    }
}

exports.getSchoolById=async(req,res,next)=>{
    try {
         const school = await School.find({_id:req.query.id},{_id:0,createdAt:0,updatedAt:0})
         res.status(200).json(school);
    
     } catch (error) {
         res.status(201).json(error);
     }
 }

 exports.updateSchool=async(req,res,next)=>{
    try {
         const school = await School.updateOne({_id:req.body._id},{$set:req.body});
         res.status(200).json(school);
    
     } catch (error) {
         res.status(201).json(error);
     }
 }
 
 exports.disableSchool=async(req,res,next)=>{
    try {
         const school = await School.updateOne({_id:req.body.id},{$set:{'enabled':false}});
         res.status(200).json(school);
    
     } catch (error) {
         res.status(201).json(error);
     }
 }
 
 exports.enableSchool=async(req,res,next)=>{
    try {
         const school = await School.updateOne({_id:req.body.id},{$set:{'enabled':true}});
         res.status(200).json(school);
    
     } catch (error) {
         res.status(201).json(error);
     }
 }
 
 exports.approveSchool=async(req,res,next)=>{
    try {
        const date = new Date().toLocaleDateString();
         const school = await School.updateOne({_id:req.body.id},{$set:{'status':'approved','approval_date':date}});
         res.status(200).json(school);
    
     } catch (error) {
         res.status(201).json(error);
     }
 }
 
 exports.disapproveSchool=async(req,res,next)=>{
    try {
         const school = await School.updateOne({_id:req.body.id},{$set:{'status':'pending','approval_date':''}});
         res.status(200).json(school);
    
     } catch (error) {
         res.status(201).json(error);
     }
 }
 