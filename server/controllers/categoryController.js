const categorySchema = require("../models/categorySchema");
const cloudinary = require("../helpers/cloudinary");
const fs = require("fs");

// Create category
const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    // Validation
    if (!name) return res.status(400).json({ error: "Category name is required" });
    if (!req.file?.path) return res.status(400).json({ error: "Category image is required" });

    // Check for existing category (case-insensitive exact match)
    const existingCategory = await categorySchema.find({ name: { $regex: `^${name}$`, $options: "i" } });
    if (existingCategory.length > 0) {
      return res.status(400).json({ error: "Category with this name already exists." });
    }

    // Upload image
    const uploadResult = await cloudinary.uploader.upload(req.file.path, { folder: "Categories" });
    fs.unlinkSync(req.file.path);

    // Save to DB
    const category = new categorySchema({
      name,
      image: uploadResult.url
    });

    await category.save();

    res.status(201).json({ message: "Category created successfully", category });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all categories
const categories = async (req, res) => {
  try {
    const allCategories = await categorySchema.find();
    res.status(200).json(allCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createCategory, categories };
