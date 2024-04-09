var express = require('express');
const multer = require('multer')
var router = express.Router();


// multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

var controller = require('../controller/base_product_controller');

router.post('/add_base_product',upload.single('image'), controller.insert_product);

module.exports = router;
