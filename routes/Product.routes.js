const express = require('express');
const router = express.Router();
const productController = require('../controllers/Product.controller');

// Routes for products
router.post('/create', productController.createProduct); // Create a new product
router.get('/getall', productController.getProducts); // Get all products
router.get('/getbyid/:id', productController.getProductById); // Get product by ID
router.put('/update/:id', productController.updateProduct); // Update product by ID
router.delete('/delete/:id', productController.deleteProduct); // Delete product by ID

module.exports = router;