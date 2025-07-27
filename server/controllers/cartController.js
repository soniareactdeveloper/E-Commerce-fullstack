const cartSchema = require("../models/cartSchema");


// Add to cart
const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;

  try {
    let cart = await cartSchema.findOne({ user: userId });

    if (!cart) {
      cart = new cartSchema({
        user: userId,
        items: [{ product: productId, quantity }],
      });
    } else {
      const index = cart.items.findIndex(
        (item) => item.product.toString() === productId
      );

      if (index > -1) {
        cart.items[index].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Get cart
const getCart = async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await cartSchema.findOne({ user: userId }).populate("items.product");
    res.status(200).json(cart || { items: [] });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};

// Update item quantity
const updateCartItem = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  try {
    const cart = await cartSchema.findOne({ user: userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const item = cart.items.find((i) => i.product.toString() === productId);
    if (item) {
      item.quantity = quantity;
      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: "Item not found in cart" });
    }
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
};

// Remove item from cart
const removeCartItem = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user._id;

  try {
    const cart = await cartSchema.findOne({ user: userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Remove failed" });
  }
};

// Export all functions
module.exports = {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
};
