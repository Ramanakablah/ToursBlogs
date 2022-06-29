const mongoose= require("mongoose")
const dotenv= require("dotenv")

dotenv.config()

const MongoUri="mongodb+srv://Ramanakablah:Raman1311@cluster0.uzijl.mongodb.net/Your-Tour-Diary?retryWrites=true&w=majority"

const ConnectionSetup = async ()=>{
 mongoose.connect(MongoUri).then(()=>{
     console.log("connection successfull")
 }).catch((Error)=>{
     console.log(Error)
 })
}

module.exports=ConnectionSetup