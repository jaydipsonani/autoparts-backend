var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller')

router.post('/add_single_product',user.register_user)

module.exports = router;