const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerPhoneNumber: { type: String, require: true },
     paymentMode: {
      type: String,
      required: true,
    }, 
    cartItems: { type: Array, require: true },
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

const Bill = mongoose.model("bills", BillSchema);

module.exports = Bill;
