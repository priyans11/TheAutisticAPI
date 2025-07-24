const User = require('../models/user-model')
const bcrypt = require('bcryptjs') 


const home = async (req, res) => {
  try {
    res.status(200).send('Hello World! using router controller') // ✅ Send HTTP response
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error home'
    })
  }
}

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body

    const userExist = await User.findOne({ email: email }) // ✅ Check if user already exists

    if (userExist) {
      return res.status(400).json({ message: 'User already exists' })
    }

    //hash password
    // const saltRound= 10;
    // const hashedPassword = await bcrypt.hash(password, saltRound); // ✅ Hash the password

    const userCreated = await User.create({
      username,
      email,
      phone,
      password
    })

    res
      .status(201)
      .json({
        Message: " registeration successful " ,
        token: await userCreated.generateToken(),
        usedId: userCreated._id.toString()
      })
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: 'Internal Server Error register'
    })
  }
}


//user ka login logic

const login = async (req, res) => 
    {
  try {
    const { email, password } = req.body

    const userExist = await User.findOne({ email: email })
    // console.log(userExist)
    if(!userExist)
    {
        return res.status(400).json({msg : "invalid email or password"})
    }
       
    // _______________________________________________________________________

    // const user=  ;

    const user = await userExist.comparePassword(password);
    if(user)
    {
        res
      .status(200)
      .json({
        Message: " Login successful " ,
        token: await userExist.generateToken(),
        usedId: userExist._id.toString()
      })
    }
    else{
        res.status(401).json({msg : "invalid email or password"})
    }

}


  catch (error) {
    res.status(500).send({
      status: 500,  
        message: 'Internal Server Error login'
    }
    )
  }

}
module.exports = { home, register ,login }
