const mongoose = require("mongoose");

const Contact = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required:[true, 'User id is required'],
    },
    name:{
        type:String,
        required:[true, 'Name is required'],
    },
   
    address:{
        type:String,
        required:[true, 'Address is required'],
       
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
    },
    phone_number:{
        type:Number,
        required:[true, 'Phone Number is required'],
    }
})

module.exports = mongoose.model('contact', Contact);