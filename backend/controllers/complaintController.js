const Complaint = require("../model/complaintModel");
// console.log("02");
module.exports.complaint = async(req,res,next) => {
    // console.log("03s");
    try {
        const {rollno,firstOption,secondOption,description,solve,time,date,level} = req.body;
        
        const complaintdetail = await Complaint.create({
            rollno,
            firstOption,
            secondOption,
            description,
            solve,
            time,
            date,
            level
        })
        
        return res.json({ status: true,complaintdetail});
        } catch (error) {
            
            next(error);
        }
};