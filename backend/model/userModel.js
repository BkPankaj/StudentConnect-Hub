const mongoose = require("mongoose");
// console.log("3");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 20,
    },
    rollno: {
        type: String,
        required: true,
        min: 1,
        max: 8,
        unique:true,
    },
    idcard: {
        type: String,
        required: true,
        min: 1,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique:true,
    },password: {
        type: String,
        required: true,
        min: 8,
    },
    verify: {
        type: Boolean,
        
    },
});

module.exports = mongoose.model("Users",userSchema);