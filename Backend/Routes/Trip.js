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
        console.log(error)
        res.status(500).send("Internal server error")
    }
})

router.put("/update/:id",fetchuser,async(req,res)=>{
    const {placename,location,experience} = req.body
    try {
        const newblog ={};
        if(experience){newblog.blog=experience}
        if(location){newblog.place=location}
        if(placename){newblog.name=placename}
        
            let blog= await Blog.findById(req.params.id)
           if(blog.user.toString()!==req.user.id)
           {res.send("Not Allowed")}
            
           blog = await Blog.findByIdAndUpdate(req.params.id,{$set:newblog},{new:true})
           console.log(blog)
           res.json(blog)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
})

router.delete("/delete/:id",fetchuser,async (req,res)=>{
    try {
        let flag= await Blog.findById(req.params.id)
        console.log("reached line 58")
        if(flag.user.toString() === req.user.id){
            flag = await Blog.findByIdAndDelete(req.params.id)
            res.send("deleted")
            console.log("deleted")
        }
        else{
            res.send("No Such Blog exist in Database")  
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server error")
    }
})

module.exports=router