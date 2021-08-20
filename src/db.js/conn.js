const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/students-api", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true ,  useFindAndModify:false});

var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")



