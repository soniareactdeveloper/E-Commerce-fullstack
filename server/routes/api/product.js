const express = require("express");
const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/productController");
const router = express.Router();
const upload = require("../../helpers/multer");
const authMiddleware = require("../../middlewares/authMiddleware");
const roleMiddleware = require("../../middlewares/roleMiddleware");

router.post(
  "/create-product",
  upload.fields([
    { name: "primeImg", maxCount: 1 },
    { name: "images", maxCount: 4 },
  ]),
  createProduct
);
router.post(
  "/update-product/:slug",
  upload.fields([
    { name: "primeImg", maxCount: 1 },
    { name: "images", maxCount: 4 },
  ]),
  updateProduct
);
// http://localhost:8000/api/v1/product/all-products?page=1&limit=100&search=prem&category=shirt&status=active
router.get("/all-products", getProduct);
router.delete(
  "/delete-product/:id",
  authMiddleware,
  roleMiddleware(["user"]),
  deleteProduct
);

module.exports = router;
