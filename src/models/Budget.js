const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    // Cliente
    customer: {
        type: mongoose.ObjectId,
        required: true,
    },

    // Produtos/Serviços
    products: [{
        type: mongoose.ObjectId,
        required: true,
    }],

    // Número do orçamento
    cod_budget: {
        type: String,
        required: true,
    },
    // Valor Total
    totalValue: {
        type: mongoose.Decimal128,
        required: true
    },

    // Observaçoes gerais
    details:{
        type: String,
        required: false,
    },

    // Forma de pagamento (A vista, boleto ou cheque)
    pay: {
        type: String,
        required: true,
    },

    // Valor de entrada para compra do material
    materialPrice: {
        type: mongoose.Decimal128,
        required: false,
    },

    // Justificativa de não conformidade
    nonconformityJustify: {
        type: String,
        required: false,
    },

    // Inspeção virtual
    virtualInspection: {
        type: Boolean,
        required: false,
    },

    // Inspeção dimensional
    dimenseInspection: {
        type: Boolean,
        required: false,
    },

    // Fornecedor do material (H7 ou cliente)
    selfProvide: {
        type: Boolean,
        required: true,
    },

    // Reponsável pela execução
    responsible: [{
        type: mongoose.ObjectId,
        required: true,
    }],

    // Data de criação automática
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Budget', BudgetSchema);