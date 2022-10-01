const router = require('express').Router();
const { getProducts } = require('../controller/products.controller');

router.route('/products').get(getProducts);

module.exports = router;
