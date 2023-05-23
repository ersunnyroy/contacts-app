const mongoose = require("mongoose");

const User = mongoose.Schema({
    firstname:{
        type:String,
        required:[true, 'First name is required']
    },
    lastname:{
        type:String,
        required:[true, 'Last name is required']
    },
    email:{
        type:String,
        required:[true, 'Last name is required'],
        unique:[true, 'Email already registered']
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
    }
})

module.exports = mongoose.model('user', User)