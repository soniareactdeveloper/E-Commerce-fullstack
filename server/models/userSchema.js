const mongoose = require("mongoose");
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
const saltRounds = 10;


const userSchema = new Schema ({
  fullname : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required :  true,
    unique : true
  },
  password : {
    type : String,
    required : true
  },
  phone : {
    type : Number,
    required : true
  },
  address : {
    type : String,
    default : null
  },
  role : {
    type: String,
    default : "user",
    enum : ["user", "admin", "vendor"],
  },
  avatar : {
    type: String,
    default :''
  },
  otp : {
    type : String,
    default : null
  },
  otpExpiredAt : {
    type: Date
  },
  isVerified : {
    type: Boolean,
    default: false
  },
  resetPassId : {
    type : String
  },
  resetPassExpiredAt : {
    type: Date
  }
},{
  timestamps : true
})


// hash the password 
userSchema.pre("save", async function(next){
  if(!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, saltRounds)
    next();
  } catch (error) {
    next(error); 
  }
})

// compare the password
userSchema.methods.isPasswordValid = async function (password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model("User", userSchema)