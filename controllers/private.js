exports.private=(req,res,next)=>{
    res.status(200).json({
        success:true,
        data:"Private data here"
    })
}