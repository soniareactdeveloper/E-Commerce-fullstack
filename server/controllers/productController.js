const productSchema = require("../models/productSchema");
const cloudinary = require("../helpers/cloudinary");
const fs = require("fs");

const createProduct = async (req, res) => {
  try {
    const { title, description, price, quantity, category } = req.body;
    const variants = JSON.parse(req.body.variants);

    // Validate required fields
    if (!title) return res.status(400).json({ message: "Title is required." });
    if (!description)
      return res.status(400).json({ message: "Description is required." });
    if (!price) return res.status(400).json({ message: "Price is required." });
    if (!quantity)
      return res.status(400).json({ message: "Quantity is required." });
    if (!category)
      return res.status(400).json({ message: "Category is required." });
    if (!variants || !Array.isArray(variants) || variants.length === 0) {
      return res
        .status(400)
        .json({ message: "Variants are required and must be an array." });
    }

    //  varient validation
    variants.forEach((item) => {
      if (!["color", "size"].includes(item.name)) {
        return res.status(400).json({
          message:
            "Invalid variant name. Allowed names are 'color' and 'size'.",
        });
      }

      // color variant validation
      if (
        item.name === "color" &&
        !item.options.every((option) => option.colorName)
      ) {
        return res.status(400).json({
          message: "Color variant must have a colorName for each option.",
        });
      }

      // size variant validation
      if (
        item.name === "size" &&
        !item.options.every((option) => option.size)
      ) {
        return res.status(400).json({
          message: "Size variant must have a size for each option.",
        });
      }
    });

    // images upload handling
    let primeImg
    if(req.files.primeImg && req.files.primeImg.length > 0) {
      const uploadResult = await cloudinary.uploader.upload(req.files.primeImg[0].path, { folder: "Products" });
      fs.unlinkSync(req.files.primeImg[0].path);
      primeImg = uploadResult.url;
    }

    let images = [];
    if (req.files.images && req.files.images.length > 0) {
      for (const file of req.files.images) {
        const uploadResult = await cloudinary.uploader.upload(file.path, { folder: "Products" });
        fs.unlinkSync(file.path);
        images.push(uploadResult.url);
      }
    }

    const product = new productSchema({
      title,
      description,
      price,
      quantity,
      category,
      variants,
      primeImg,
      images,
    });

    await product.save();

    res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  res.send("get product");
};

module.exports = { createProduct, getProduct };
