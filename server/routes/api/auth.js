const express = require("express")
const { login, register, verifyEmail, forgetPassword, resetPassword, updateUser } = require("../../controllers/authController")
const authMiddleware = require("../../middlewares/authMiddleware")
const upload = require("../../helpers/multer")
const roleMiddleware = require("../../middlewares/roleMiddleware")
const router = express.Router()


router.post("/login", login)
router.post("/register", register)
router.post("/verify-email", verifyEmail)
router.post ("/forget-password", forgetPassword)
router.post("/reset-password/:randomString", resetPassword)
router.post("/update-user", authMiddleware, roleMiddleware(["user", "admin", "vendor"]), upload.single('avatar'),  updateUser)


module.exports = router