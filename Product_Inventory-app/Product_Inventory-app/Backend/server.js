const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/db');
const router = require('./Routes/productroute');
const port = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect Database
connectDB();

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api", router);

// Start Server
app.listen(port, () => {
    console.log("Server running on port " + port);
});
