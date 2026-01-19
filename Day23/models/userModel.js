const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    fullName: String,
    age: Number,
    email: String,
    password: String
})

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;
