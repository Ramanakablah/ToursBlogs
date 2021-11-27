const mongoose = require("mongoose")
const { Schema }= mongoose

const MemberSchema = Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"Image"
    },
    about:{
        type:String,
        required:true,
        default:"ME" 
    }
})

const Member = mongoose.model("Personal",MemberSchema)
module.exports=Member;