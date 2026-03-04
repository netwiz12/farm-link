const mongoose = require('mongoose');

const commoditySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    farmerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Farmer', required: true },
    category: { type: String, required: true },
    image: { type: String },
    rating: { type: Number, min: 0, max: 5 },
    createdAt: { type: Date, default: Date.now }
});

const Commodity = mongoose.model('Commodity', commoditySchema);

module.exports = Commodity;