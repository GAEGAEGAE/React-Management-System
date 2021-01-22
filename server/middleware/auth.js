import jwt from "jsonwebtoken";
import config from "../config/index"

const auth = (req, res, next) => {
    const token = req.header('x-auth-token')

    if(!token) {
        return res.status(401).json({msg: "Not Token, Acces Denied."});
    }

    try {
        const decoded = jwt.verify(token, "admin_moon");
        req.user = decoded;
        next()
    }catch(e){
        console.log(e);
        res.status(400).json({mag: "Unvalid Token, Access Denied."});

    }
};

export default auth;