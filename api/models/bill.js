const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    customeName: {
      type: String,
      required: true,
    },
    customerPhoneNumber: {
      type: String,
      required: true,
    },
    paymentMode: {
      type: String,
      required: true,
    },
    cartItems: {
      type: Array,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },

    tax: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const bill = mongoose.model("Bills", billSchema);

module.exports = bill;
