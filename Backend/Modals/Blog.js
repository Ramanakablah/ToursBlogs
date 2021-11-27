const mongoose = require("mongoose")
const {Schema} = mongoose;

const Blogschema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"Image"
    },
    blog:{
        type:String,
        required:true
    },
    dateupload:{
        type:Date,
        default:Date.now
    },
    datevisited:{
        type:Date,
        default:Date.now
    },
    place:{
        type:String,
        required:true
    }
}) ;
const Blog = mongoose.model("Blog", Blogschema)
module.exports = Blog;