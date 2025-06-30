const express = require("express")
const { createProduct, getProduct } = require("../../controllers/productController")
const router = express.Router()


router.post("/create-product", createProduct)
router.get("/all-products", getProduct)



module.exports = router