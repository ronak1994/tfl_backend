const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    film_title:{
        type: String,
        required:[true, "Please provide a film name"]
    },
    duration:{
        type: String,
        required:[true, "Please provide a duration"]
    },
    sort_by:{
        type: String,
        required:[true, "Please provide a week no"]
    },
    synopsis:{
        type: String,
        required:[true, "Please provide a sysnopsis"]
    },
    bts:{
        type: String,
        required:[true, "Please provide a bts"]
    },
    refrences:{
        type: String,
        required:[true, "Please provide a refrences"]
    },
    vocab:{
        type: String,
        required:[true, "Please provide a vocab"]
    },
    thumbnail:{
        type: String,
        required:[true, "Please provide a thumbnail"]
    },
    video_url:{
        type: String,
        required:[true, "Please provide a video url"]
    },
    activity_ids:{
        type: String,
        required:[true, "Please provide a activity ids"]
    },
   
    reflection_ids:{
        type: String,
        required:[true, "Please provide a activity ids"]
    }
},{timestamps:true});

const Lesson = mongoose.model("Lesson",LessonSchema);

module.exports = Lesson;


//ActivitySchema

const ActivitySchema = new mongoose.Schema({
    activity_title:{
        type: String,
        required:[true, "Please provide a Activity name"]
    },
    activity_description:{
        type: String,
        required:[true, "Please provide a Activity name"]
    },
    activity_attachment:{
        type: String,
        required:[true, "Please provide a Activity name"]
    },
 
 
},{timestamps:true});

const Activity = mongoose.model("Activity",ActivitySchema);

module.exports = Activity;


//Reflections
const reflectionSchema = new mongoose.Schema({
    reflection_title:{
        type: String,
        required:[true, "Please provide a Reflection name"]
    },
    reflection_data:{
        type: String,
        required:[true, "Please provide a Activity name"]
    },
  
},{timestamps:true});

const Reflection = mongoose.model("Reflection",reflectionSchema);

module.exports = Reflection;
