const categories = require("../models/category.js");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        
    } catch (error) {
     res.status(400).json(error);   
    }
});
