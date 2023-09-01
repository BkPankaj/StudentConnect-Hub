const User = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async(req,res,next) => {
  
    try {
        const { name,rollno,idcard,email,password,verify} = req.body;
       
        const rollnoCheck = await User.findOne({rollno});
        if(rollnoCheck){
            return res.json({ msg: "Roll no already used", status: false});
        }
        const emailCheck = await User.findOne({email});
        if(emailCheck){
            return res.json({ msg: "Email already used", status: false});
        }
        const idcardCheck = await User.findOne({idcard});
        if(idcardCheck){
            return res.json({ msg: "idCard already used", status: false});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            email,
            name,
            rollno,
            idcard,
            password:hashedPassword,
            verify,
        })
        delete user.password;
        return res.json({ status: true,user});
        } catch (error) {
            next(error);
        }
};

module.exports.login = async(req,res,next) => {
    
    try {
    const { rollno,password} = req.body;
    const user = await User.findOne({rollno});
    if(!user){
        return res.json({ msg: "Incorrect rollno & password", status: false});
    }
    const isPasswordalid = await bcrypt.compare(password,user.password);

    if(!isPasswordalid){
        return res.json({ msg: "Incorrect rollno & password", status: false});
    }

    if(!user.verify){
        return res.json({ msg: "Verification not done", status: false});
    }
    delete user.password;
    return res.json({ status: true,user});
    } catch (error) {
        next(error);
    }
};