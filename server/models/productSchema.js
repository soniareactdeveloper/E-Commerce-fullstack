const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    primeImg: {
      type: String,
      default: "",
    },
    images: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: ["active", "pending", "reject"],
      default: "active",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    variants: [
      {
        name: {
          type: String,
          enum: ["size", "color"],
          lowercase: true,
          required: true,
        },
        options: [
          {
            colorName: {
              type: String,
            },
            size: {
              type: String,
            },
            additionalPrice: {
              type: Number,
              default: 0,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
