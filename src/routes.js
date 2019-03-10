const express = require('express');
const routes = express.Router();

const CustomersController = require('./controllers/CustomersController');
const BudgetsController = require('./controllers/BudgetsController');
const ProductsController = require('./controllers/ProductsController');

// Clientes
routes.get('/customers', CustomersController.index);
routes.get('/customers:id', CustomersController.show);
routes.post('/customers', CustomersController.store);
routes.put('/customers/:id', CustomersController.update);
routes.delete('/customers/:id', CustomersController.destroy);


// Orçamentos
routes.get('/budgets', BudgetsController.index);
routes.get('/budgets:id', BudgetsController.show);
routes.post('/budgets', BudgetsController.store);
routes.put('/budgets/:id', BudgetsController.update);
routes.delete('/budgets/:id', BudgetsController.destroy);


// Produtos / Serviços
routes.get('/products', ProductsController.index);
routes.get('/products:id', ProductsController.show);
routes.post('/products', ProductsController.store);
routes.put('/products/:id', ProductsController.update);
routes.delete('/products/:id', ProductsController.destroy);


module.exports = routes;