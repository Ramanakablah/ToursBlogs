const mongoose= require("mongoose")
const dotenv= require("dotenv")

dotenv.config()

const MongoUri=process.env.MONGO_URI

const ConnectionSetup = async ()=>{
 mongoose.connect(MongoUri).then(()=>{
     console.log("connection successfull")
 }).catch((Error)=>{
     console.log(Error)
 })
}

module.exports=ConnectionSetup