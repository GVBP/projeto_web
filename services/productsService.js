var fs = require('fs');

var productsFilePath = "db/products.json";

var loadFileProducts = function() {
  var fileProducts = fs.readFileSync(productsFilePath, "UTF-8");
  var products = JSON.parse(fileProducts);
  return products;
}

var saveFileProducts = function(products) {
  var data = JSON.stringify(products);
  fs.writeFileSync(productsFilePath, data, 'utf8');
}

var getProducts = function() {
  var products = loadFileProducts();
  return products;
}

var saveProduct = function(newProduct) {
  var products = loadFileProducts();
  products.push(newProduct);
  saveFileProducts(products);
}

module.exports = {
  getProducts: getProducts,
  saveProduct: saveProduct
}