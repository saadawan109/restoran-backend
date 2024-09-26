const CategoryModel = require('../models/Category.model');

// Create a new category
const createCategory = async (req, res) => {
    try {
        const { name, description, image } = req.body;
        const newCategory = new CategoryModel({ name, description, image });
        await newCategory.save();
        res.status(201).json({
            success: true,
            message: 'Category created successfully!',
            category: newCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating category',
            error: error.message,
        });
    }
};

// Get all categories
const getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        res.status(200).json({
            success: true,
            categories,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching categories',
            error: error.message,
        });
    }
};

// Get a category by ID
const getCategoryById = async (req, res) => {
    try {
        const category = await CategoryModel.findById(req.params.id);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found',
            });
        }
        res.status(200).json({
            success: true,
            category,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching category',
            error: error.message,
        });
    }
};

// Update a category
const updateCategory = async (req, res) => {
    try {
        const { name, description, image } = req.body;
        const category = await CategoryModel.findByIdAndUpdate(
            req.params.id,
            { name, description, image },
            { new: true, runValidators: true }
        );

        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Category updated successfully!',
            category,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating category',
            error: error.message,
        });
    }
};

// Delete a category
const deleteCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Category deleted successfully!',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting category',
            error: error.message,
        });
    }
};

module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};
