const mongoose = require("mongoose");


const connectDb = async () => {
    try{
        const connect = await mongoose.connect('mongodb://127.0.0.1:27017/contact-app');
        console.log("Database connection established" , connect.connection.host, connect.connection.name);
    }catch(err){
        console.log('error')
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;