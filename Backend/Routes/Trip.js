const express = require("express")
const router = express.Router();
const Blog = require("../Modals/Blog")
const upload = require("../Multer/Upload")
const fetchuser = require("../Fetchuser/Fetchuser")

router.post("/enter",fetchuser,upload.single("image"), async (req,res)=>{
    try {  
          const Blogent= await Blog.create({
            user:req.user.id,
            name:req.body.name,
            place:req.body.place,
            blog:req.body.blog   
        })
          console.log(Blogent)
          res.json("Uploaded kindly confirm")

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server Error")
    }
})

router.get("/fetchblog",fetchuser, async(req,res)=>{
    try {
        const blogs = await Blog.find({user:req.user.id})
        res.json(blogs)
    } catch (error) {
        
    }
})

module.exports=router