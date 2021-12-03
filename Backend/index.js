const express= require("express")
const ConnectionSetup = require("./database")
const cors= require("cors")
const upload = require("./Multer/Upload")
const app=express()
const Port=5000

app.use(express.json())
app.use(cors())
app.use(upload.single("image"))
ConnectionSetup();

app.use("/trip",require("./Routes/Trip"))
app.use("/join",require("./Routes/Member"))

app.listen(Port,()=>{
    console.log(`Listening to appp at port ${Port}`)
})