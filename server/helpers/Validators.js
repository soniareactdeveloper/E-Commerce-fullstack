// helpers/validators.js

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  if (!password || password.length < 8) {
    return { valid: false, error: "Password must be at least 8 characters long." };
  }

  if (!/[A-Z]/.test(password)) {
    return { valid: false, error: "Password must contain at least one uppercase letter." };
  }

  if (!/[a-z]/.test(password)) {
    return { valid: false, error: "Password must contain at least one lowercase letter." };
  }

  if (!/\d/.test(password)) {
    return { valid: false, error: "Password must contain at least one number." };
  }

  if (!/[@$!%*?#&]/.test(password)) {
    return { valid: false, error: "Password must contain at least one special character " };
  }

  return { valid: true };
};

module.exports = {validateEmail,validatePassword};
