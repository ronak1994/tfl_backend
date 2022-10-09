const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const TeacherSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Please provide a teacher name"]
    },
    email:{
        type: String,
        required:[true, "Please provide a city"]
    },
    phone_number:{
        type: String,
        required:[true, "Please provide a phone number"]
    },
    password:{
        type: String,
        required:[true, "Please provide a password"],
        select: false
    },
  
    school_id:{
        type: String,
        required:[true, "Please provide an school code"]
    },
    school_name:{
        type: String,
        required:[true, "Please provide an school name"]
    },
    grade:{
        type: String,
        required:[true, "Please provide grades"]
    },
  
    registration_date:{
        type: String,
        required:[true, "Please provide an Registration date"]
    },
    status:{
        type: String,
        required:[false]
    }
})

TeacherSchema.pre("save", async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})


const Teacher = mongoose.model("Teacher",TeacherSchema);

module.exports = Teacher;