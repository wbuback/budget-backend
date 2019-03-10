const mongoose = require('mongoose');
const Budget = mongoose.model('Budget');

module.exports = {
    async index(req, res) {
        const budgets = await Budget.find();
        return res.json(budgets);
    },

    async show(req, res) {
        const budget = await Budget.findById(req.paramns.id);
        return res.json(budget);
    },

    async store(req, res) {
        const budget = await Budget.create(req.body);
        return res.json(budget);
    },

    async update(req, res) {
        const budget = await Budget.findByIdAndUpdate(req.paramns.id, req.body, { new: true });
        return res.json(budget);
    },

    async destroy(req, res) {
        await Budget.findOneAndRemove(req.paramns.id);
        return res.send();
    },
}