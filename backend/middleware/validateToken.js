const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const {constants} = require('../constants');


const validateToken = asyncHandler(async(req, res, next) => {
    let token;
    const authToken = req.headers.Authrozation || req.headers.authorization;
    
    if(authToken && authToken.startsWith("Bearer"))
    {
        token = authToken.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                res.status(constants.UNAUTHORIZED);
                throw new Error("User not authrozied");
            }

            req.user = decoded.user;
            next(); 
        });

        if(!token){
            res.status(constants.UNAUTHORIZED);

            throw new Error("User not authrozied or token is missing");
        }
    }
    else
    {
        res.status(constants.UNAUTHORIZED);

        throw new Error("User not authrozied or token is missing");
    }
});


module.exports = validateToken;