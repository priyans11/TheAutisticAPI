


const mongoose = require('mongoose');
// const URI = "mongodb://127.0.0.1:27017/theautisticapi";
// mongoose.connect(URI)
// require('dotenv').config(); 


const URI= process.env.MONGODB_URI
const connectDb = async () => { 
    try {
         await mongoose.connect(URI)
        //  console.log("Database connected successfully");
    }
    catch (error)
     {
        console.error("Database connection failed:", error);
        process.exit(1); 
    }
};


module.exports = connectDb;
