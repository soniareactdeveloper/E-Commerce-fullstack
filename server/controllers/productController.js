const productSchema = require("../models/productSchema");
const cloudinary = require("../helpers/cloudinary");
const fs = require("fs");
const generateSlug = require("../helpers/slug");
const { buildSearchQuery } = require("../helpers/searchRegex");

const createProduct = async (req, res) => {
  try {
    const { title, description, price, quantity, category } = req.body;
    const variants = req.body.variants ? JSON.parse(req.body.variants) : [];

    // Validate required fields
    if (!title) return res.status(400).json({ message: "Title is required." });
    if (!description)
      return res.status(400).json({ message: "Description is required." });
    if (!price) return res.status(400).json({ message: "Price is required." });
    if (!quantity)
      return res.status(400).json({ message: "Quantity is required." });
    if (!category)
      return res.status(400).json({ message: "Category is required." });

    const slug = generateSlug(title);
    const existingProduct = await productSchema.findOne({ slug: slug });
    if (existingProduct)
      return res
        .status(400)
        .json({ message: "A product with this title already exist" });

    if (!variants || !Array.isArray(variants) || variants.length === 0) {
      return res
        .status(400)
        .json({ message: "Variants are required and must be an array." });
    }

    // Validate variants using for...of loop
    for (const item of variants) {
      if (!["color", "size"].includes(item.name)) {
        return res.status(400).json({
          message:
            "Invalid variant name. Allowed names are 'color' and 'size'.",
        });
      }

      if (
        item.name === "color" &&
        !item.options.every((option) => option.colorName)
      ) {
        return res.status(400).json({
          message: "Color variant must have a colorName for each option.",
        });
      }

      if (
        item.name === "size" &&
        !item.options.every((option) => option.size)
      ) {
        return res.status(400).json({
          message: "Size variant must have a size for each option.",
        });
      }
    }

    // Upload prime image
    let primeImg;
    if (req.files.primeImg && req.files.primeImg.length > 0) {
      const uploadResult = await cloudinary.uploader.upload(
        req.files.primeImg[0].path,
        { folder: "Products" }
      );
      fs.unlinkSync(req.files.primeImg[0].path);
      primeImg = uploadResult.url;
    }

    // Upload other images
    let images = [];
    if (req.files.images && req.files.images.length > 0) {
      for (const file of req.files.images) {
        const uploadResult = await cloudinary.uploader.upload(file.path, {
          folder: "Products",
        });
        fs.unlinkSync(file.path);
        images.push(uploadResult.url);
      }
    }

    // Save product
    const product = new productSchema({
      title,
      description,
      price,
      slug,
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

// update Product
const updateproduct = async (req, res) => {
  try {
    const { title, description, price, quantity, category, variants } =
      req.body;
    const { slug } = req.params;

    const existingProduct = await productSchema.findOne({ slug: slug });

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    if (title) existingProduct.title = title;
    if (description) existingProduct.description = description;
    if (price) existingProduct.price = price;
    if (quantity) existingProduct.quantity = quantity;
    if (category) existingProduct.category = category;
    if (variants && variants.length > 0) existingProduct.variants = variants;

    if (req?.files?.primeImg?.length > 0) {
      for (const item of req.files.primeImg) {
        // Delete old image from cloudinary
        await cloudinary.uploader.destroy(
          existingProduct.primeImg.split("/").pop().split(".")[0]
        );

        // Upload new image
        const result = await cloudinary.uploader.upload(item.path, {
          folder: "product",
        });

        // Remove uploaded file from server
        fs.unlinkSync(item.path);

        // Update image URL
        existingProduct.primeImg = result.secure_url;
      }
    }

    await existingProduct.save();

    res
      .status(200)
      .json({
        message: "Product updated successfully",
        product: existingProduct,
      });
  } catch (error) {
    console.error("Update Product Error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
// Get products with search and pagination
const getProduct = async (req, res) => {
  try {
    const search = req.query.search || "";
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const query = buildSearchQuery(search);
    const totalProducts = await productSchema.countDocuments(); 
    const totalPages = Math.ceil(totalProducts / limit);
    const skip = (page - 1) * limit;

    const products = await productSchema.find(query).skip(skip).limit(limit);

    const hasPrevPage = page > 1;
    const hasNextPage = page < totalPages;

    res.send({
      products,
      totalProducts,
      totalPages,
      limit,
      page,
      hasPrevPage,
      hasNextPage,
      prevPage: hasPrevPage ? page - 1 : null,
      nextPage: hasNextPage ? page + 1 : null,
    });
  } catch (error) {
    res.status(500).send({ error: "Server Error" });
  }
};
;

module.exports = { createProduct, updateproduct, getProduct };
