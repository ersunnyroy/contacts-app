const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/usersModel');
const jwt  = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const { constants } = require('../../constants');
/**
 * @description Controller of Users 
 * @author  Sunny Roy
 */

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password)
    {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("All fields are mandatory!");
    }

    const user = await User.findOne( { email } );

    if(user)
    {
        const verifyPassword = await bcrypt.compare(password, user.password);
        if(verifyPassword)
        {
            const accessToken = jwt.sign({
                user:{
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    id: user.id
                },
            }, process.env.JWT_SECRET, { expiresIn : "1m" });

            res.status(constants.OKAY).json({ accessToken });
        }
        else
        {
            res.status(constants.UNAUTHORIZED);
            throw new Error("Invalid credentials");
        }
    }
    else
    {
        res.status(constants.NOT_FOUND);
        throw new Error("User not found");
    }
 });

const registerUser = asyncHandler(async(req, res) => {

    const {firstname, lastname, email, password} = req.body;

    if(!firstname || !lastname || !email || !password)
    {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("All fields are mandatory!");
    }

    // checking if any user already exists with email
    const userAvailable = await User.findOne({email});
    if(userAvailable)
    {
        res.status(constants.VALIDATION_ERROR);
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

    res.status(constants.OKAY).send({message : "Registered Successfully!", user});
 });

 module.exports = { loginUser, registerUser};