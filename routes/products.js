var express = require('express');
var router = express.Router();
var productsService = require('../services/productsService');

/* GET products page. */
router.get('/', function (req, res, next) {
    var products = productsService.getProducts();

    res.render('products/products', { title: 'Blog', products: products });
});

/* GET productId page. */
router.get('/listBuy', function (req, res, next) {
    res.render('products/listBuy', { title: 'Página em Construção' });
});

module.exports = router;
