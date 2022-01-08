const express = require("express")
const app = express();
const router = express.Router()
const Token = "HaayeMeriDiwaliKhatamHoGyi"
const { body, validationResult } = require("express-validator")
const Member = require("../Modals/Member")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require("../Fetchuser/Fetchuser")
const fs = require("fs")



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
            res.json({ mssg: "User with these Credentials already Exist", pass: false })
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
            res.json({ mssg: token, pass: true })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }

})

router.post("/login", [
    body('email').isEmail(),
    body('password').isLength({ min: 4 })
], async (req, res) => {
    try {
        let flag = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { password, email } = req.body
        const Memb = await Member.findOne({ email })
        if (!Memb) {
            res.json("Enter correct credentils")
        }
        const Passerverif = await bcrypt.compare(password, Memb.password)

        if (!Passerverif) {
            res.status(401).json({ reply: "Access-Denied", pass: flag })
        }
        else {
            flag = true;
            const data = {
                user: {
                    id: Memb.id
                }
            }
            var token = jwt.sign(data, Token)
            const log = {
                reply: token,
                pass: flag
            }
            res.json(log)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.put("/edit", fetchuser, async (req, res) => {
    try {
        const user = await Member.findById(req.user.id)
        if (user) {
            const { name, contact } = req.body
            const newvals = {};
            if (name) { newvals.name = name }
            if (contact) { newvals.contact = contact }
            const edits = await Member.findByIdAndUpdate(req.user.id, { $set: newvals }, { new: true })
            res.json({ massg: edits, success: true })
        }
        else {
            res.json({ mssg: "Unknown Error Occured Retry", success: false })
        }
    } catch (error) {
        console.log(error)
    }
})

router.post("/avatar", fetchuser, async (req, res) => {
    try {
        const Memb = await Member.findById(req.user.id)
        if (Memb) {
            const path = Memb.avatar
            if(path!== "Image")
            {
                fs.unlinkSync(`./public/pimg/${path}`,(err)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log("Deleted Succesfully")
                    }
                })
            }
            const img = await req.files.dp;
            console.log(img)
            const imagename=Date.now()+img.name
            console.log(imagename)
            await img.mv("public/pimg/" + imagename)
            const UMemb = await Member.findByIdAndUpdate(req.user.id, { $set: { avatar: `${imagename}` } }, { new: true })
            res.json(UMemb)
        }
    } catch (error) {
        console.log(error)
    }
})

router.get("/fetchblogger", fetchuser, async (req, res) => {
    try {
        const Blogger = await Member.findById(req.user.id).select("-password")
        res.json(Blogger)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
})

router.put("/about", fetchuser, async (req, res) => {
    try {
        const { about } = req.body
        let newent = await Member.findByIdAndUpdate(req.user.id, { $set: { about: about } });
        newent = await Member.findById(req.user.id)
        res.json(newent)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
})

module.exports = router