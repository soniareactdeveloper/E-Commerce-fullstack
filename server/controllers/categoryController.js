const categorySchema = require("../models/categorySchema");
const  cloudinary = require("../helpers/cloudinary");
const fs = require("fs")

// create category
const createCategory = async (req, res) => {
  const {name} = req.body;

  try {
    // validation
    if(!name) return res.status(400).json({ error: "Category name is required" });
    if(!req.file?.path) return res.status(400).json({ error: "Category image is required" });

    // upload an image
    const uploadResult = await cloudinary.uploader.upload(req.file?.path, { folder: "Categories"})
    fs.unlinkSync(req.file.path)

    // Save to DB
    const category = new categorySchema({
      name,
      image : uploadResult.url
    })
    await category.save();

    res.status(201).json({ message: "Category created successfully", category});

  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}


// get categories
const categories = async (req, res) => {
  try {
    const allCategories = await categorySchema.find();

    res.status(200).json(allCategories); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = { createCategory, categories}