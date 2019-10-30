var express = require('express');
var router = express.Router();
var productsService = require('../services/productsService');

/* GET products page. */
router.get('/', function (req, res, next) {
    var products = productsService.getProducts();

    res.render('products/products', { title: 'Blog', products: products });
});

/* GET productId page. */
router.get('/:productId', function (req, res, next) {
    var productId = req.params.productId;
    var products = productsService.getProducts();
    var product = products.filter((product) => product.id == productId)[0];

    res.render('products/product', { title: product.name, product: product });
});

module.exports = router;
