// usermodel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /\S+@\S+\.\S+/.test(value),
            message: 'Invalid email address: ',
        },
    },
    city: {
        type: String,
        required: true,
        match: /^[a-zA-Z\s]+$/,
    },
    website: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^(http|https):\/\/\S+$/.test(value),
            message: 'Invalid URL format',
        },
    },
    zipCode: {
        type: String,
        required: true,
        match: /^\d{5}-\d{4}$/,
    },
    phone: {
        type: String,
        required: true,
        match: /^1-\d{3}-\d{3}-\d{4}$/,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
