const  cloudinary = require("../helpers/cloudinary");
const sendMail = require("../helpers/mail");
const generateRandomString = require("../helpers/randomString");
const { mailTemplate, resetPassTemplate } = require("../helpers/template");
const { validateEmail, validatePassword } = require("../helpers/Validators");
const userSchema = require("../models/userSchema");
var jwt = require('jsonwebtoken');
const fs = require('fs')

// register controller
const register = async(req, res) =>{
  const { fullname, email, password, phone, avatar, address, role} = req.body;
  try {
    // validates
    if(!fullname) return res.status(400).json({error : "fullname is required"})
    if(!email) return res.status(400).json({error : "email is required"})
    if(!validateEmail(email)) return res.status(400).json({ error: "Please enter a valid email address." });
    if(!password) return res.status(400).json({error : "password is required"})
    const passCheck = validatePassword(password)
    if(!passCheck.valid) return res.status(400).json({ error: passCheck.error });
    if (!phone) return res.status(400).json({ error: "Phone number is required." });
    
    // check existing user
    const existingUser = await userSchema.findOne({email})
    if(existingUser) return res.status(400).json({ error: "User already exist" })

    // generate random otp
    const randomOtp = Math.floor( 1000 + Math.random() * 9000)
    
    // save to db
    const user = new userSchema({
      fullname,
      email,
      password,
      avatar,
      address,
      phone,
      role,
      otp : randomOtp,
      otpExpiredAt : new Date(Date.now() + 5 * 60 * 1000),
    })
    await user.save()

  //mail 
   sendMail(email , "verify your email", mailTemplate, randomOtp)

   res.status(201).send({success: "Registration susseccfull! Please verify your email."});

  } catch (error) {
    res.status(500).json({error : "internal server error"})
  }
}

// verify email 
const verifyEmail = async (req, res) =>{
  const {email, otp} = req.body;
  try {
    if(!email) return res.status(400).json({error : "email is required"})
    if(!otp) return res.status(400).json({error : "otp is required"})
    
    const verifyUser = await userSchema.findOne({email, otp, otpExpiredAt : {$gt : Date.now()}})
    if(!verifyUser) return res.status(400).json({error : "invalid Otp"})

    verifyUser.otp = null;
    verifyUser.otpExpiredAt = null;
    verifyUser.isVerified = true;
    verifyUser.save()

   res.status(200).send({success: "Email verified successfully!"})
    
  } catch (error) {
    res.status(500).json({error : "internal server error"})
  }
}

// login controller
const login = async (req, res) =>{
  const { email , password} = req.body;
  try {
    if(!email) return res.status(400).json({error : "email is required"})
    if(!validateEmail(email)) return res.status(400).json({ error: "Please enter a valid email address." });
    if(!password) return res.status(400).json({error : "password is required"})


    const passCheck = validatePassword(password)
    if(!passCheck.valid) return res.status(400).json({ error: passCheck.error });

    const existingUser = await userSchema.findOne({email});
    if(!existingUser) return res.status(400).send({error: "User not found!"})
    
    // compare the pass
    const passwordCheck = await existingUser.isPasswordValid(password)
    if(!passwordCheck) return res.status(400).send({error: "Wrong password"});

    if (!existingUser.isVerified) return res.status(400).send({ error: "Email not verified" });

    // jwt token
    const accessToken = jwt.sign({
      data: {
        id: existingUser._id,
        email: existingUser.email,
        role : existingUser.role
      }
    }, process.env.JWT_TOKEN , { expiresIn: '1d' });

    //  sent data witout password
    const loggedUser = {
      email: existingUser.email,
      _id: existingUser._id,
      fullname: existingUser.fullname,
      avatar: existingUser.avatar,
      isVerified: existingUser.isVerified,
      phone: existingUser.phone,
      address: existingUser.address,
      role: existingUser.role,
      createdAt: existingUser.createdAt,
      updatedAt: existingUser.updatedAt
    }
    
    res.status(200).send({success: "Login Sussessfull", accessToken, user: loggedUser});

  } catch (error) {
    res.status(500).json({error : "internal server error"})
  }
}

// forget pass 
const forgetPassword = async (req, res) =>{
  const {email} = req.body;
  try {
    if(!email) return res.status(400).json({error : "email is required"})

    // Check existing user
    const existingUser = await userSchema.findOne({email})
    if(!existingUser) return res.status(400).send({error: "User not found!"})

    // generate random string
    const randomString = generateRandomString(35)

    // Set reset token 
    existingUser.resetPassId = randomString;
    existingUser.resetPassExpiredAt = new Date(Date.now() + 5 * 60 * 1000)
    existingUser.save()

    // Send reset email
    sendMail(email, "reset password", resetPassTemplate, randomString)

    res.status(201).json({ message: "Check your email for password reset instructions." });
    
  } catch (error) {
    res.status(500).json({error : "internal server error"})
  }
}

// reset the password 
const resetPassword = async (req, res) => {
  const { newPass } = req.body;
  const randomString = req.params.randomString;
  const email = req.query.email;

  try {
    if (!newPass) return res.status(400).json({ error: "Password is required" });

    const passCheck = validatePassword(newPass);
    if (!passCheck.valid) return res.status(400).json({ error: passCheck.error });

    // Check if user exists 
    const existingUser = await userSchema.findOne({
      email,
      resetPassId: randomString,
      resetPassExpiredAt: { $gt: Date.now() },
    });

    if (!existingUser) return res.status(400).json({ error: "Invalid or expired link" });

    // Update password and clear reset fields
    existingUser.password = newPass;
    existingUser.resetPassId = null;
    existingUser.resetPassExpiredAt = null;

    await existingUser.save(); 

    res.status(200).json({ success: "Password reset successfully" });

  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// update User
const updateUser = async (req, res) => {
  const {fullname, password, avatar} = req.body;
  try {
    const existingUser = await userSchema.findById(req.user.id)
  
    if(fullname) existingUser.fullname = fullname.trim().split(/\s+/).join(' ');
    if(password) existingUser.password = password
  
    if(req.file.path){

      // destroy the image if exist
      if(existingUser.avatar) await cloudinary.uploader.destroy(existingUser.avatar.split('/').pop().split('.')[0])


      // Upload an image
      const uploadResult = await cloudinary.uploader.upload(req.file.path)
      existingUser.avatar = uploadResult.url
      fs.unlinkSync(req.file.path)
    }
    existingUser.save()

      

    res.status(200).send(existingUser)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}


module.exports = {register,login, verifyEmail, forgetPassword, resetPassword, updateUser}