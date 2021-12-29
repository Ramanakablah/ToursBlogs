const express = require("express")
const app = express();
const router = express.Router()
const Token = "HaayeMeriDiwaliKhatamHoGyi"
const { body, validationResult } = require("express-validator")
const Member = require("../Modals/Member")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require("../Fetchuser/Fetchuser")



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
            res.json("User already Exist")
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
            res.status(400).json("Access-Denied")
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
                auth: token,
                pass: flag
            }
            res.json(log)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.post("/avatar", fetchuser, async (req, res) => {
    try {
        const Memb = await Member.findById(req.user.id)
        if (Memb) {
            const img = await req.files.dp;
            console.log(img)
            await img.mv("public/pimg/" +img.name)
            const UMemb = await Member.findByIdAndUpdate(req.user.id, { $set: { avatar: img.name } }, { new: true })
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