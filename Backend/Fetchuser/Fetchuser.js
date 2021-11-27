const jwt= require("jsonwebtoken")
const Token = "HaayeMeriDiwaliKhatamHoGyi"

const fetchuser = (req,res,next)=>{
    try {
        const token = req.header("auth-token")
        if(!token)
        {
            res.status(400).send("Access-Denied")
        }
        else{
            const data = jwt.verify(token,Token)
            req.user=data.user;
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

module.exports=fetchuser;
