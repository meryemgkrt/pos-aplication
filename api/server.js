const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const app = express();
const logger = require("morgan");
const PORT = process.env.PORT || 5000;

// Load environment variables from .env file
dotenv.config();

// Import routes
const categoryRoute = require("./routes/category.js");
const productRoute = require("./routes/products.js");
const billRoute = require("./routes/bills.js");
const userRoute = require("./routes/user.js");
const usersRoute = require("./routes/users.js");

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

// Database connection
const mongoUri = process.env.MONGO_URL;
if (!mongoUri) {
  throw new Error("MONGO_URL environment variable is not defined.");
}

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/category", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/user", userRoute);
app.use("/api/users", usersRoute);

app.get("/", (req, res) => res.send("Hello World!"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
