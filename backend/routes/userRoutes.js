const { register, login } = require("../controllers/userController");
const router = require("express").Router();
// console.log("0");
router.post("/register",register);
router.post("/login",login);
module.exports = router;