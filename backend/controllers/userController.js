const asyncHandler = require('express-async-handler');
/**
 * @description Controller of Users 
 * @author  Sunny Roy
 */

const loginUser = asyncHandler(async (req, res) => {

    const {firstname, lastname, email, password} = req.body;

    if(!firstname || !lastname || !email || !password)
    {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    res.status(200).send({message : "user login route"});
 });

const registerUser = (req, res) => {
    res.status(200).send({message : "User registeration route"});
 }

 module.exports = { loginUser, registerUser};