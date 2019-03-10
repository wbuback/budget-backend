const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    customer: {
        type: mongoose.ObjectId,
        required: true,
    },
    products: [{
        type: mongoose.ObjectId,
        required: true,
    }],
    cod_budget: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Budget', BudgetSchema);