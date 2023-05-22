const express = require('express');
const connectDb = require('./config/dbConfig');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();



connectDb();

const app = express();


const port = process.env.PORT || 5000;

app.use(errorHandler);

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/user', require("./routes/userRoutes"));

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
})

