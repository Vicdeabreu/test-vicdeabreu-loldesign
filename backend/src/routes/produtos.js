const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

const mysqlConnection = require('../database');

//ver produtos em geral
router.get('/products', productController.view);
// Ver só um produto
router.get('/products/:id', productController.show);
//filtrar produtos
router.get('/products/:origem/:destino/:duracao/:plano', productController.search);

module.exports = router;