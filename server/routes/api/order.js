const express = require("express");
const { createOrder } = require("../../controllers/orderController");
const authMiddleware = require("../../middlewares/authMiddleware");


const router = express.Router();

// 📦 Create new order
router.post("/create-order", authMiddleware, createOrder);

module.exports = router;
