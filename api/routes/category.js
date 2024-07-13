const Category = require('../models/Category');
const express = require("express");
const router = express.Router();


router.get("/get-all",async (rq,res)=>{
    try {
        const Categoryes = await category.find();
        res.status(200).json(Categoryes);
    } catch (error) {
        console.log(error)
    }
})


router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new category(req.body);
    await newCategory.save();
    res.status(200).json("Category has been created");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/update-category", async (req, res) => {
    try {
      await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
      res.status(200).json("Item updated successfully.");
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;