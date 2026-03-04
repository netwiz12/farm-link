const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    farmName: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ''
    },
    profileImage: {
        type: String,
        default: ''
    },
    commodities: {
        type: [String],
        default: []
    },
    rating: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Farmer', farmerSchema);