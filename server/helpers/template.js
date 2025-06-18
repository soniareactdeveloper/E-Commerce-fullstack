const mailTemplate = (otp) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f8ff; padding: 20px;">
      <div style="max-width: 500px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #1e3a8a; text-align: center; margin-bottom: 20px;">Verification Code (OTP)</h2>
        <p style="font-size: 16px; color: #333;">Dear User,</p>
        <p style="font-size: 16px; color: #333;">
          Please use the following One-Time Password (OTP) to complete your action. This OTP is valid for <strong>5 minutes</strong>.
        </p>
        <div style="font-size: 36px; font-weight: bold; text-align: center; margin: 30px 0; color: #2563eb;">
          ${otp}
        </div>
        <p style="font-size: 14px; color: #666;">
          If you did not request this code, please disregard this email. No further action is required.
        </p>
        <p style="font-size: 16px; color: #333; margin-top: 30px;">Best regards,<br/><strong>E-commerce</strong></p>
      </div>
    </div>
  `;
};

const resetPassTemplate = (randomString, email)=>{
    return `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #f4f4f4; padding: 20px 0;">
        <tr>
            <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; background-color: #ffffff; padding: 20px; border-radius: 8px;">
                    <tr>
                        <td style="text-align: center; padding-bottom: 20px;">
                            <h2 style="color: #333333; font-size: 24px;">Forgot Your Password?</h2>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-bottom: 20px; color: #333333; font-size: 16px; line-height: 1.5;">
                            <p>Hello</p>
                            <p>We received a request to reset the password for your account. If you didn't request this change, please ignore this email.</p>
                            <p>To reset your password, click the button below:</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-bottom: 20px;">
                            <a href="${process.env.BASE_URL}/api/v1/auth/reset-password/${randomString}?email=${email}" style="background-color: #007bff; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">Reset Your Password</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #666666; font-size: 14px; text-align: center;">
                            <p>This link will expire in 10 min for security reasons.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>
    `
}


module.exports = {mailTemplate, resetPassTemplate}