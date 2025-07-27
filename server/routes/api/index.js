const express = require("express")
const router = express.Router()
const authRouter = require("../api/auth")
const categoryRouter = require("./category")
const productRouter = require("./product")
const cartRouter = require('./cart')

router.use("/auth", authRouter)
router.use("/category", categoryRouter)
router.use("/product", productRouter)
router.use("/cart", cartRouter)


module.exports = router