const express = require("express")
const router = express.Router()
const authRouter = require("../api/auth")
const productRouter = require("../api/product")

router.use("/auth", authRouter)
router.use("/product", productRouter)


module.exports = router