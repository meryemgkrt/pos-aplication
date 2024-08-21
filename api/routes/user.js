const User = require("../models/User.js");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

//! Resgister
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      verify: false,
    });
    await newUser.save();
    res.status(200).json("A new user created successfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});
//! Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send({ message: "User not found" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(403).json("Wrong password");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
