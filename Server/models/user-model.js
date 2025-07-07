const mongoose = require('mongoose');

const bcrypt = require ("bcryptjs");
const jwt =require ("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
    },
    
    phone: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },  

});




 userSchema.pre("save", async function(next){
const user = this ;
if(!user.isModified("password"))
{
next();
}
try{
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password= hashedPassword;

}
catch(error){
    console.error("Error hashing password:", error);
    next(error);
}

})

//compare password
userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password)

}


//json web token
userSchema.methods.generateToken = async function() { 
    try{
        return jwt.sign({
            userid: this._id.toString(),
            email:this.email,
            isAdmin: this.isAdmin,
        }, process.env.JWT_SECRET,
        
        {
            expiresIn: "10d",
        }
    );

    }
    catch(error){
        console.error("Error generating token:", error);
        throw error;
    }
};

const User = mongoose.model('User', userSchema);

module.exports = User;