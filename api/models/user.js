const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verify:{
        type:Boolean,
        required:true,
    }
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("users", userSchema);

module.exports = user;
