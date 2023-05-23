const express = require('express');
const connectDb = require('./config/dbConfig');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();


// Database connection
connectDb();

const app = express();
const port = process.env.PORT || 5000;

//middle ware to parse json from request body
app.use(express.json());

// Routes 
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/user', require("./routes/userRoutes"));

// Error handler middleware
app.use(errorHandler);


// application started
app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
})

