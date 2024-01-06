const jwt = require("jsonwebtoken")

function verifyToken(req, res, next) {
    const token = req.headers['authorization']
    if(!token){
        return res.status(402).json({
            message: "Unauthorization"
        })
    }
    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
        if(err){
            return res.status(402).json({
                message: "Unauthorization"
            })
        }
        next();
    });
}

module.exports = verifyToken