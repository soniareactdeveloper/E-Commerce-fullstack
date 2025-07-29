const Order = require("../models/orderSchema");
const Product = require("../models/productSchema");

// 📦 Create a new order
const createOrder = async (req, res) => {
  try {
    const { items, shippingAddress, phone, paymentMethod } = req.body;

    // ✅ Basic validation
    if (!items || items.length < 1) {
      return res
        .status(400)
        .json({ message: "At least one product is required." });
    }
    if (!shippingAddress || !shippingAddress.address) {
      return res.status(400).json({ message: "Shipping address is required." });
    }
    if (!phone) {
      return res.status(400).json({ message: "Phone number is required." });
    }
    if (!paymentMethod) {
      return res.status(400).json({ message: "Payment method is required." });
    }

    let totalAmount = 0;
    const processedItems = [];

    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res
          .status(404)
          .json({ message: `Product not found: ${item.productId}` });
      }

      let itemPrice = product.price;

      // 💡 Calculate variant-based additional pricing
      if (item.selectedVariants && item.selectedVariants.length > 0) {
        item.selectedVariants.forEach((variant) => {
          const productVariant = product.variants.find(
            (v) => v.name.toLowerCase() === variant.variantType.toLowerCase()
          );

          if (productVariant) {
            const matchedOption = productVariant.options.find((opt) => {
              // Matching size or color name depending on variant type
              if (variant.variantType.toLowerCase() === "color") {
                return opt.colorName === variant.option;
              } else if (variant.variantType.toLowerCase() === "size") {
                return opt.size === variant.option;
              }
              return false;
            });

            if (matchedOption) {
              itemPrice += matchedOption.additionalPrice || 0;
            }
          }
        });
      }

      totalAmount += itemPrice * item.quantity;

      processedItems.push({
        product: item.productId,
        quantity: item.quantity,
        selectedVariants: item.selectedVariants,
        price: itemPrice,
      });
    }

    // 🧾 Create and save order
    const order = new Order({
      user: req.user.id,
      orderItems: processedItems,
      shippingAddress,
      phone,
      totalPrice: totalAmount,
      paymentMethod,
    });

    const createdOrder = await order.save();

    res.status(201).json({
      message: "Order placed successfully.",
      order: createdOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

module.exports = {
  createOrder,
};
