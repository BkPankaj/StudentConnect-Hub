const Complaint = require("../model/complaintModel");


module.exports.getcomp = async(req,res,next) => {
    const total_number = await Complaint.countDocuments();
    const solved_number = await Complaint.countDocuments({solve:true});
    const level_number = await Complaint.countDocuments({level:3});
    return res.json({total_number,solved_number,level_number});
}