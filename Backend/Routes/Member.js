const express = require("express")
const router = express.Router()
const { body, validationResult } = require("express-validator")
const Member = require("../Modals/Member")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require("../Fetchuser/Fetchuser")
const Token = "HaayeMeriDiwaliKhatamHoGyi"
const multer = require("multer")
// const upload = require("../Multer/Upload")


router.post("/auth", [
    body('name').isString(),
    body('email').isEmail(),
    body('mob').isNumeric(),
    body('password').isLength({ min: 4 }),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body
        const Exist = await Member.findOne({ email })

        if (Exist) {
            res.send("User already Exist")
        }
        else {
            const salt = bcrypt.genSaltSync(10)
            const newpasskey = await bcrypt.hash(password, salt)
            const Info = await Member.create({
                name: req.body.name,
                contact: req.body.mob,
                email: email,
                password: newpasskey
            })     
            const data = {
                user: {
                    id: Info.id
                }
            }
            var token = jwt.sign(data, Token)
            res.json(token)
        }
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }

})

router.post("/login",[
    body('email').isEmail(),
    body('password').isLength({ min: 4 })
], async (req,res)=>{
    try {
        let flag =false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {password,email} = req.body
        const Memb = await Member.findOne({email}) 
        console.log(Memb.password);
         if(!Memb){
             res.send("Enter correct credentils")
         }
         const Passerverif = await bcrypt.compare(password,Memb.password)
         if(!Passerverif){
            res.status(400).send("Access-Denied")
         }
         if(Passerverif){
          flag=true;
         }

         const data = {
            user: {
                id: Memb.id
            }
        }
        console.log(data)
        console.log(Memb.id)
        var token = jwt.sign(data, Token)
        console.log(token)
        const log={
            auth:token,
            pass:flag
        }
        res.json(log)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

const image=""
const Filestorage = multer.diskStorage({
    destination:(req,file,Callback)=>{
     Callback(null,"../public/images")
    },
   filename:(req,file,Callback)=>{
     Callback(null, Date.now() + file.originalname)
    }
})

const upload = multer({
    storage:Filestorage
})

router.post("/avatar",fetchuser,upload.single("image"),async (req,res)=>{
    try { 
        const ent = await Member.findById(req.user.id)
        if(ent){
            console.log(req.file)
            const img = req.file.filename;
            console.log(img);
            const newent = await Member.findByIdAndUpdate(req.user.id,{$set:{avatar:img}});
            const entj = await Member.findById(req.user.id)
            res.json(entj)
        }
        else{
            res.send("no such user exist")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
})

router.get("/fetchblogger",fetchuser,async (req,res)=>{
    try {
        const Blogger= await Member.findById(req.user.id).select("-password")
        res.json(Blogger)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")  
    }
})

router.put("/about",fetchuser,async(req,res)=>{
    try {
        const {about} = req.body
        const newent = await Member.findByIdAndUpdate(req.user.id,{$set:{about:about}});
        console.log(newent)
        const ent= await Member.findById(req.user.id)
        res.json(ent)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")    
    }
})

module.exports = router       