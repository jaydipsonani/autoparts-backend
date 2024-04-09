var mongoose = require('mongoose');

//schema

var product_schema = new mongoose.Schema({
    name : {
        type : String
    },
    description : {
        type : String,
    },
    base_product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "base_product"
    }
    
})

module.exports = mongoose.model('sub_product',product_schema);