var mongoose = require('mongoose');

var product_schema = new mongoose.Schema({
        name:{
            
        }
})

module.exports = mongoose.model('single_product',product_schema)