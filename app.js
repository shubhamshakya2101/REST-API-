const express = require("express");
require("./src/db.js/conn");
const Student = require("./src/models/students");
const studentRouter = require("./src/router/student");

const app= express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000 , function(){
    console.log("Server started at port at 3000");
})

