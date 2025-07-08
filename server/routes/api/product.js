const express = require("express")
const { createProduct, getProduct } = require("../../controllers/productController")
const router = express.Router()
const upload = require("../../helpers/multer")

router.post("/create-product", upload.fields([{ name: 'primeImg', maxCount: 1 }, { name: 'images', maxCount: 4 }]), createProduct)
router.get("/all-products", getProduct)



module.exports = router