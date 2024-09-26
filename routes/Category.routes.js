const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/Category.controller');


// Routes for categories
router.post('/create', categoryController.createCategory); // Create a new category
router.get('/getall', categoryController.getCategories); // Get all categories
router.get('/getbyid/:id', categoryController.getCategoryById); // Get category by ID
router.put('/update/:id', categoryController.updateCategory); // Update category by ID
router.delete('/delete/:id', categoryController.deleteCategory); // Delete category by ID

module.exports = router;