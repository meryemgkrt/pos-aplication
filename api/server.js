const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;

/* Routes */
const categoriesRoute = require("./routes/categories");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use("/api/categories", categoriesRoute);

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => {
  connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
