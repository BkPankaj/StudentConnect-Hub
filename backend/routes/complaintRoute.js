const {complaint} = require("../controllers/complaintController");
const router = require("express").Router();

// console.log("00");
router.post("/sendcomp",complaint);
module.exports = router;