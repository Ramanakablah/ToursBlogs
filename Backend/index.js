const express= require("express")
const ConnectionSetup = require("./database")
const cors= require("cors")
const app=express()
const Port=5000

app.use(express.json())
app.use(cors())
ConnectionSetup();

app.use("/trip",require("./Routes/Trip"))
app.use("/join",require("./Routes/Member"))

app.listen(Port,()=>{
    console.log(`Listening to appp at port ${Port}`)
})