const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CustomerSchema = new mongoose.Schema({
    nomeEmpresa: {
        type: String,
        required: true,
    },
    nomeResponsavel: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    telefone: {
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