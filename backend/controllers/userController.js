const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/usersModel');
/**
 * @description Controller of Users 
 * @author  Sunny Roy
 */

const loginUser = asyncHandler(async (req, res) => {
    res.status(200).send({message : "user login route"});
 });

const registerUser = asyncHandler(async(req, res) => {

    const {firstname, lastname, email, password} = req.body;

    if(!firstname || !lastname || !email || !password)
    {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    // checking if any user already exists with email
    const userAvailable = await User.findOne({email});
    if(userAvailable)
    {
        res.status(400);
        throw new Error("User already exists with this email address");
    }
    
    // hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user into database
    const user = await User.create({
                                firstname,
                                lastname,
                                email,
                                password: hashedPassword
                            });

    res.status(200).send({message : "Registered Successfully!", user});
 });

 module.exports = { loginUser, registerUser};