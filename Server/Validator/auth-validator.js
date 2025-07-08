const { z } = require('zod')

const signupSchema = z.object({
  username: z
    .string({ required_error: 'name is required' })
    .trim()
    .min(3, { msg: 'Username must be at least 3 characters long' })
    .max(30 , { msg: 'Username must be at most 30 characters long' }),
    
    email: z
    .string({required_error:"email is required"})
    .trim()
    .email({msg :"invalid email"})
    .min(5, { msg: 'Email must be at least 5 characters long' })
    .max(50, { msg: 'Email must be at most 50 characters long' }),

    phone: z
    .string({required_error:"phone is required"})
    .trim()
    .min(10, { msg: 'Phone number must be at least 10 characters long' })
    .max(15, { msg: 'Phone number must be at most 15 characters long' }),
    
    password: z
    .string({ required_error: 'password is required' })
    .trim()
    .min(6, { msg: 'Password must be at least 6 characters long' })
    .max(50, { msg: 'Password must be at most 50 characters long' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character' })
    




});


// Add login schema
const loginSchema = z.object({
  email: z
    .string({required_error:"email is required"})
    .trim()
    .email({msg :"invalid email"}),
    
  password: z
    .string({ required_error: 'password is required' })
    .trim()
    .min(1, { msg: 'Password is required' })
});

module.exports = { signupSchema, loginSchema };