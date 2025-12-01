const Product = require("../Model/product");

// Get All Products
const displayAll = async (req, res) => {
  try {
    const data = await Product.find({});
    res.json({ success: true, data });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, error });
  }
};

// Add Product
const productadd = async (req, res) => {
  try {
    const { name, price, category, image } = req.body; // image is URL string

    const result = await Product.create({
      name,
      price,
      category,
      image,
    });

    res.json({ success: true, data: result });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, error });
  }
};

// Edit Product
const productedit = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body; // {name, price, category, image}

    const result = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.json({ success: true, data: result });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, error });
  }
};

// Get Single Product
const productoneedit = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Product.findById(id);

    res.json({ success: true, data: result });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, error });
  }
};

// Delete Product
const productdelete = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await Product.findByIdAndDelete(id);

    res.json({ success: true, data });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, error });
  }
};

module.exports = {
  displayAll,
  productadd,
  productedit,
  productoneedit,
  productdelete,
};
