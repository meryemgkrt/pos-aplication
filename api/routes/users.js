const user= require("../models/User.js");
const express = require("express");
const router = express.Router();

//! get all users
router.get("/get-all", async (req, res) => {
    try {
     const users = await user.find();
     res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
 
 });
//! get a user
router.get("/", async (req, res) => {
    const userId =req.body.userId;
    try {
     const user =await user.findById(userId);
     res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error);
    }
 
 });


module.exports = router;
