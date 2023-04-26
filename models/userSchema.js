const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    profile: String,
    email: String,
    education: String,
    exprience: String,
    hobbies: String,
    language: String,
    dob: String,
    contact: String,
    skill: String,
});

module.exports = mongoose.model("user",userSchema);