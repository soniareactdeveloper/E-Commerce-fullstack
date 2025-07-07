const productSchema = require("../models/productSchema");

const createProduct = async (req, res) => {
  // try {
    const { title, description, price, quantity, category, variants } = req.body;

    variants.forEach((item) => {
      if (!["color", "size"].includes(item.name)) {
        return res.status(400).json({
          message: "Invalid variant name. Allowed names are 'color' and 'size'."
        });
      }
      
      

    });

    
    res.send(variants)


    return
    const product = new productSchema({
      title,
      description,
      price,
      quantity,
      category,
      variants
    });

    await product.save();

    res.status(201).json({
      message: "Product created successfully",
      data: product
    });

  // } catch (error) {
  //   res.status(500).json({
  //     message: "Failed to create product",
  //     error: error.message
  //   });
  // }
};


const getProduct = async (req, res) => {
  res.send("get product")
}



module.exports = {createProduct, getProduct}