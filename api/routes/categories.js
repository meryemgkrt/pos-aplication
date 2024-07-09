const express = require("express");
const router = express.Router();
const Category = require("../models/category.js");

// Middleware to check for required fields
router.use((req, res, next) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    next();
});

router.post("/add-category", async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).json("Category has been created");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
