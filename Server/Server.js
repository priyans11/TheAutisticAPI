require('dotenv').config(); 
const express = require('express');

const app = express();
const authRouter = require('./Router/Auth-router');

const connectDb = require('./utils/db.js');

//middleware
app.use(express.json()); /*: This line of code adds Express middleware that parses
incoming request bodies with JSON payloads. It's important to place this before
any routes that need to handle JSON data in the request body. This middleware is
responsible for parsing JSO data from requests, and it should be applied at the
beginning of your middleware stack to ensure it's available for all subsequent
route handlers.*/


app.use("/api/auth", authRouter);




// app.get("/", (req, res) => {
//     res.status(200).send("Hello World!");   
// });

// app.get("/register", (req, res) => {
//     res.status(200).send("Register Page");      
// });

const PORT =5000;


connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
     });
