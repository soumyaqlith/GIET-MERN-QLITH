const mongoose = require("mongoose");
const userModel = require("../models/userModel");

async function connectDb() {
    try {
        let conn = await mongoose.connect("mongodb://127.0.0.1:27017/GietDb");
        console.log("Db connected");
        // userModel.insertOne({fullName:"hii",age:30,email:"hii@gmail.com",password:"hii123"});
        // console.log("data save");
    } catch (error) {
        console.log("Db not connected");
    }
}

module.exports = connectDb