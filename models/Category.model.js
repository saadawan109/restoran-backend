const mongoose = require("mongoose");

// Creating category schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensure category name is unique
        trim: true, // Remove leading/trailing spaces
        maxlength: 100 // Limit category name length
    },
    description: {
        type: String,
        maxlength: 500, // Optional, but limits the description length
        trim: true // Removes extra spaces
    },
    picture: {
        type: String,
        default: "default-category.jpg", // Default image for the category
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically




// Creating and exporting the Category model
const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
