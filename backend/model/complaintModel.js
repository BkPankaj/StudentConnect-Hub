const mongoose = require("mongoose");
// console.log("01");
const complaintSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        max: 50,
    },
    rollno: {
        type: String,
        required: true,
        min: 2,
        max: 20,
    },
    firstOption: {
        type: String,
        required: true,
        min: 1,
        max: 8,
    
    },
    secondOption: {
        type: String,
        required: true,
        min: 1,
       
    },
   
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    level:{
        type:Number,
        required:true,
    },
    solve:{
        type:Boolean,
        required:true,
    },
});

module.exports = mongoose.model("Complaint",complaintSchema);