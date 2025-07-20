require('dotenv').config(); 
const express = require('express');

const app = express();
const authRouter = require('./Router/Auth-router');

const connectDb = require('./utils/db.js');
const emotionRouter = require('./Router/emotion-router');


//middleware
app.use(express.json());

app.use("/api/auth", authRouter);
app.use('/api/emotion', emotionRouter);





// app.get("/", (req, res) => {
//     res.status(200).send("Hello World!");   
// });

// app.get("/register", (req, res) => {
//     res.status(200).send("Register Page");      
// });

const PORT= process.env.PORT 

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
     });
