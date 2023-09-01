const Complaint = require("../model/complaintModel");


module.exports.getcomp = async(req,res,next) => {
    const {f_rollno} = req.body;
    const total_number = await Complaint.countDocuments({rollno:f_rollno});
    const solved_number = await Complaint.countDocuments({rollno:f_rollno,solve:true});
    const level_number = await Complaint.countDocuments({rollno:f_rollno,level:3});
    return res.json({total_number,solved_number,level_number});
}