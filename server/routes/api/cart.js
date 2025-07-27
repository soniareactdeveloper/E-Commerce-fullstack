const express = require("express");
const { addToCart, getCart, updateCartItem, removeCartItem } = require("../../controllers/cartController");
const router = express.Router();

// Add product to cart
router.post("/add-cart", addToCart);

// Get current user's cart
router.get("/get-cart", getCart);

// Update quantity of a product in the cart
router.put("/update-cart", updateCartItem);

// Remove a product from the cart by productId
router.delete("/remove-cart/:productId", removeCartItem);

module.exports = router;
