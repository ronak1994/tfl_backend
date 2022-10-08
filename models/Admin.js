const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const AdminSchema = new mongoose.Schema({
firstname:{
    type: String,
    required:[true, "Please provide a username"]
},
lastname:{
    type: String,
    required:[true, "Please provide a lastname"]
},
phone_number:{
    type: String,
    required:[true, "Please provide a Phone Number"]
},

email:{
    type:String,
    required:[true, "Please provide an email"],
    unique:true,
    match:[
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please provide a valid email"
    ]
},
password:{
    type: String,
    required:[true,"Please porivde a password"],
    minlength:6,
    select: false
}
},{timestamps:true})

AdminSchema.pre("save", async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})

AdminSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

AdminSchema.methods.getSignedToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{ expiresIn: '6h' });
}

const Admin = mongoose.model("Admin",AdminSchema);

module.exports = Admin;