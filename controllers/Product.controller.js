const ProductModel = require('../models/Product.model');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const{title, price, image,category , description} = req.body
        
        const newProduct = await ProductModel({ title:title, price:price, image:image ,category: category, description:description });
       res.status(200).json({
        error:false,
        newProduct:newProduct
       })
    } catch (error) {
        console.log(error.message);
        
        res.status(500).json({
            error:true,
            message:"internal server error"
        });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        // Fetching all products from the database
        const products = await ProductModel.find();

        // Log the products to the console for debugging
        console.log(products);

        // Sending the products as a response to the client in JSON format
        res.status(200).json(products);

    } catch (error) {
        // Logging the error message to the console for debugging
        console.log(error.message);

        // Sending a 500 Internal Server Error response with the error message
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Get a product by ID
const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching product',
            error: error.message,
        });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const { title, price, image } = req.body;
        const product = await ProductModel.findByIdAndUpdate(
            req.params.id,
            { title, price, image },
            { new: true, runValidators: true } // Ensure the updated document is returned
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            product,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating product',
            error: error.message,
        });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting product',
            error: error.message,
        });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
