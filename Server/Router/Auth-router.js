const express = require('express');
const router = express.Router();
const authcontroller = require('../Controllers/auth-controller'); 
const signupSchema = require ("../Validator/auth-validator")   
const validate = require ("../middleware/validate-middleware")





// router.get("/", (req, res) => {
//     res.status(200).send("Hello World! using router");
// });






router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema),authcontroller.register); 
router.route("/login").post(authcontroller.login); 


module.exports = router;