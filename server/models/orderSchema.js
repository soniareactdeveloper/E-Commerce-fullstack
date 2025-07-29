const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  selectedVariants: [
    {
      variantType: { type: String }, // e.g., "color", "size"
      option: { type: String },      // e.g., "Red", "M"
    },
  ],
  price: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [OrderItemSchema],
    shippingAddress: {
      fullName: { type: String },
      address: { type: String, required: true },
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["Cash on Delivery", "Stripe", "PayPal", "Bkash", "Nagad"],
      default: "Cash on Delivery",
    },
    paymentResult: {
      id: { type: String },
      status: {
        type: String,
        default: "pending",
        enum: ["pending", "complete"],
      },
      update_time: { type: String },
      email_address: { type: String }, // useful for Stripe/PayPal
      transaction_id: { type: String }, // for mobile payments
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
