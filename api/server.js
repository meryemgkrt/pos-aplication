const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Load environment variables from .env file
dotenv.config();

// Import routes
const categoryRoute = require("./routes/category.js");

// Middlewares
app.use(express.json());
app.use(cors());

// Database connection
const mongoUri = process.env.MONGO_URL;
if (!mongoUri) {
  throw new Error("MONGO_URL environment variable is not defined.");
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api", categoryRoute);

app.get("/", (req, res) => res.send("Hello World!"));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
