const express = require("express")
const { createCategory, categories } = require("../../controllers/categoryController")
const upload = require("../../helpers/multer")
const authMiddleware = require("../../middlewares/authMiddleware")
const roleMiddleware = require("../../middlewares/roleMiddleware")
const router = express.Router()

router.post("/create-category", authMiddleware, roleMiddleware(["user"]), upload.single('image'), createCategory)

router.get("/categories", categories)

module.exports = router