const category = require("../models/category");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newCategory = new category(req.body);
    await newCategory.save();
    res.status(200).json("Category has been created");
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router;