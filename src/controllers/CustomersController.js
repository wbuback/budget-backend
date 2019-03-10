const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const Budget = require('../models/Budget');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        // const customers = await Customer.find({}, { page, limit: 10 });
        const customers = await Customer.find();
        return res.json(customers);
    },

    async show(req, res) {
        const customer = await Customer.findById(req.paramns.id);
        return res.json(customer);
    },

    async store(req, res) {
        const customer = await Customer.create(req.body);
        return res.json(customer);
    },

    async update(req, res) {
        const customer = await Customer.findByIdAndUpdate(req.paramns.id, req.body, { new: true });
        return res.json(customer);
    },

    async destroy(req, res) {
        await Customer.findOneAndRemove(req.paramns.id);
        return res.send();
    },

    async addBudget(req, res) {
        const { budgetId } = req.paramns.id;
        const newBudget = new Budget(req.body)
        const customer = await Customer.findById(budgetId);

        newBudget.customer = customer;
        await newBudget.save();

        customer.push(newBudget);
        await customer.save();

        res.status(201).json(newBudget)
    }
}