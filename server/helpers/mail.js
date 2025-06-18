const nodemailer = require("nodemailer");

// send otp to the email
const sendMail = async(email, subject, template,random) =>{
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });
     
    const info = await transporter.sendMail({
      from: '"E-commerce" <' + process.env.EMAIL_USER + '>',
      to: email,
      subject: subject,
      html: template(random , email)
    });
}
  
module.exports = sendMail
  
  
  