const Complaint = require("../model/complaintModel");
const cron = require('node-cron');

cron.schedule('0 0 * * *', async () => {
    console.log('Running daily task - level check...');
    try {
    
        const trackdetail = async (event) =>{


            const articles = await Complaint.find({});
        
            articles.forEach(async (indivi) => {
                const curr_d = new Date().getTime();
                const store_d = new Date(indivi.date).getTime();   
                
                const timeDifference = curr_d - store_d;
                
                const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
                
        
        
                if(daysDifference >= 5 && daysDifference <= 9){
                    await Complaint.updateOne(
                        { _id: indivi._id }, 
                        { $set: { level: 2 } }
                      );
                }else if(daysDifference >= 10 && daysDifference < 15){
                    await Complaint.updateOne(
                        { _id: indivi._id }, 
                        { $set: { level: 3 } } 
                      );
                }
              
                
                console.log("Daily task completed - Level Checked");
            });
        
        
        }
        trackdetail();
        
    
    
    } catch (error) {
        console.error('Error in daily task:', error);
      }
    });

module.exports.getallcomp = async(req,res,next) => {
    const {f_rollno} = req.body;
    const documents = await Complaint.find({rollno:f_rollno});
    return res.json({documents});
}