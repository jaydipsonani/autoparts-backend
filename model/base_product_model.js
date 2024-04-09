var mongoose = require('mongoose');

//schema

var product_schema = new mongoose.Schema({
    name : {
        type : String
    },
    image : {
        type : String
    },
    description : {
        type : String,
    }
})

module.exports = mongoose.model('base_product',product_schema);