const multer = require("multer")

const Filestorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../public/images")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + file.originalname)
    }
})

const upload= multer({storage:Filestorage})

module.exports=upload