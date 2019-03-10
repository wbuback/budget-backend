const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desciption: {
        type: String,
        required: true,
    },
    price: {
        type: mongoose.Decimal128,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Product', ProductSchema);