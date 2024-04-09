var express = require('express');
var router = express.Router();

var controller = require('../controller/sub_product_cotroller');

router.post('/add_sub_product',controller.insert_product);
router.get('/',controller.get_product)

module.exports = router;
