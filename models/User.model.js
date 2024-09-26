const mongoose = require("mongoose");

// Creating user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true 
    },
    email: {
        type: String,
        required: true,
        unique: true, // Email must be unique
        trim: true,
        lowercase: true, // Store emails in lowercase for consistency
        validate: {
            validator: function (v) {
                // Regex to validate email format
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Ensures password is at least 6 characters long
    },
    photo: {
        type: String,
        default: "dummy.jpg", // Default image path
    },
    isAdmin: {
        type: Boolean,
        default: false // Default value for isAdmin is false
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Creating and exporting User model
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
