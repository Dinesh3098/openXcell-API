require('dotenv').config()

const express = require('express');
const mongoose = require("mongoose");
const app = express();


//DB connection
mongoose.connect("mongodb://localhost:27017/openxcellapi", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() =>{
    console.log("DATABASE CONNECTED")
});

//Port
const port = process.env.PORT || 3000

//Starting a server
app.listen(port, () => console.log(`App is running on port no. ${port}`));