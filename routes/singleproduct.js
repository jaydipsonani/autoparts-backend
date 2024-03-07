var express = require('express');
var router = express.Router();
const multer = require('multer');

//multer start
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
       cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })

var user = require('../controller/singleproductcontroller')

router.post('/add_product',upload.array('image',5),user.add_product)
router.get('/allproduct',user.view_product)
router.post('/update/:id',user.update_product)
router.post('/delete/:id',user.delete_product)

module.exports = router;