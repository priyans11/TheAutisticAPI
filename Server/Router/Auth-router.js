const express = require('express');
const router = express.Router();
const home = require('../Controller/Auth-controller');    

// router.get("/", (req, res) => {
//     res.status(200).send("Hello World! using router");
// });

router.route("/").get(home);




router.route("/").get((req, res) => {
    res.status(200).send("hhhHello World! using router");
});


router.route("/register").get((req, res) => {
    res.status(200).send("Register Page using router");     
}); 


module.exports = router;