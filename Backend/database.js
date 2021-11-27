const mongoose= require("mongoose")
const MongoUri= "mongodb://localhost:27017/Tour?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const ConnectionSetup =()=>{
    mongoose.connect(MongoUri,()=>{
        console.log("Connected")
    })
}

module.exports=ConnectionSetup