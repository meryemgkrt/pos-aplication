const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },

    },
    {timestamps: true}
);

const category = mongoose.model("Categoryes", categorySchema);

module.exports = category;