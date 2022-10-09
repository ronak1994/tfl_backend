const Teacher = require('../models/Teacher');
const School = require('../models/School');

exports.register = async (req,res,next) =>{
    const school_code = School.findOne({'school_id':req.body.school_id},
     function (err, docs) {
      if (err){
       return  res.status(201).json(err);
      }
     else{
          
        if(!docs){
            return res.status(200).json({success:true,school_id:false});
        }else{
            if(!docs.enabled){
                return res.status(200).json({success:true,school_id:false});
            }
              let temp = {
                registration_date:new Date().toLocaleDateString(),
                status:"approved",
                school_name:docs.school_name
                }
                const final_object = {...req.body,...temp};
                try {
                    const teacher =  Teacher.create(final_object)
                    return res.status(200).json({success:true,school_id:true});
               
                } catch (error) {
                    return res.status(201).json(error);
                }
        }
    }
    });

};

exports.getList=async(req,res,next)=>{
    try {
        const teachers = await Teacher.find({})
        res.status(200).json(teachers);
   
    } catch (error) {
        res.status(201).json(error);
    }
}

exports.getTeacherById=async(req,res,next)=>{
    try {
         const school = await Teacher.find({_id:req.query.id},{_id:0,createdAt:0,updatedAt:0})
         res.status(200).json(Teacher);
    
     } catch (error) {
         res.status(201).json(error);
     }
 }

 exports.updateTeacher=async(req,res,next)=>{
    try {
         const school = await Teacher.updateOne({_id:req.body._id},{$set:req.body});
         res.status(200).json(Teacher);
    
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
 
 exports.disapproveTeacher=async(req,res,next)=>{
    try {
         const school = await Teacher.updateOne({_id:req.body.id},{$set:{'status':'pending','approval_date':''}});
         res.status(200).json(Teacher);
    
     } catch (error) {
         res.status(201).json(error);
     }
 }
 