var jwt = require("jsonwebtoken")
const Token = "HaayeMeriDiwaliKhatamHoGyi"

const fetchuser = (req, res, next) => {
    try {
    const token = req.header("auth-token")
    if (!token){
        res.json(" Access Denied ") 
    }
     else{
         const data = jwt.verify(token,Token)
         req.user = data.user;
         next();
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('internal Server Error')
    }
}
module.exports = fetchuser