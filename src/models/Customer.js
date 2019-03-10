const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    person: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    budgets: [{
        type: mongoose.ObjectId,
        required: false,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

CustomerSchema.plugin(mongoosePaginate);
mongoose.model('Customer', CustomerSchema);