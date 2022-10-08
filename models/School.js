const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
    school_name:{
        type: String,
        required:[true, "Please provide a school name"]
    },
    city:{
        type: String,
        required:[true, "Please provide a city"]
    },
    state:{
        type: String,
        required:[true, "Please provide a username"]
    },
    contact_person_name:{
        type: String,
        required:[true, "Please provide a contact person name"]
    },
    phone_number:{
        type: String,
        required:[true, "Please provide a phone number"]
    },
    email:{
        type: String,
        required:[true, "Please provide an email"]
    },
    school_id:{
        type: String,
        required:[true, "Please provide an email"]
    },
    registration_date:{
        type: String,
        required:[true, "Please provide an Registration date"]
    },
    approval_date:{
        type: String,
        required:[false]
    },
    payment_status:{
        type: String,
        required:[false]
    },
    enabled:{
        type: Boolean,
        required:[true,"Provide enabled"]
    },
    status:{
        type: String,
        required:[false]
    },
    remarks:{
        type: String,
        required:[false]
    }
    
  
})

const School = mongoose.model("School",SchoolSchema);

module.exports = School;