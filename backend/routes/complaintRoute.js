const {complaint} = require("../controllers/complaintController");
const {getcomp} = require("../controllers/homeController");
const {getallcomp} = require("../controllers/trackController");
const router = require("express").Router();

// console.log("00");
router.post("/sendcomp",complaint);
router.post("/getcomp",getcomp);
router.post("/getallcomp",getallcomp);
module.exports = router;