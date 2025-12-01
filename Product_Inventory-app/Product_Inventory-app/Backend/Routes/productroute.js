const express = require("express");
const productcontroller = require("../Controller/productcontroller");
const router = express.Router();

// Get All Products
router.get("/product", productcontroller.displayAll);

// Add Product
router.post("/product", productcontroller.productadd);

// Get One Product
router.get("/product/:id", productcontroller.productoneedit);

// Edit Product
router.patch("/product/:id", productcontroller.productedit);

// Delete Product
router.delete("/product/:id", productcontroller.productdelete);

module.exports = router;
