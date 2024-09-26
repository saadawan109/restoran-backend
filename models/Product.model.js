const mongoose = require("mongoose");

// Creating product schema
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      
       
    },
    price: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true
    },
    description:{
        type:String,
        
    },
    category:{
    type:String
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically



// Creating and exporting the Product model
const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
