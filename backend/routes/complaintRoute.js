const {complaint} = require("../controllers/complaintController");
const {getcomp} = require("../controllers/homeController");
const {getallcomp} = require("../controllers/trackController");
const router = require("express").Router();

// console.log("00");
router.post("/sendcomp",complaint);
router.get("/getcomp",getcomp);
router.get("/getallcomp",getallcomp);
module.exports = router;