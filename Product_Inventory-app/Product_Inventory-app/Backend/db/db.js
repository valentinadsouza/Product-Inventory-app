const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/productinventory");
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1); // stop app if DB fails
  }
};

module.exports = ConnectDB;
