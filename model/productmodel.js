var mongoose = require('mongoose');

var product_schema = new mongoose.Schema({
    price:{
        type: String
    },
    title:{
        type:String
    },
    offer:{
        type:String
    },
    discountprice:{
        type:String
    },
    image:{
        type:String
    },
    category:{
        type:String
    },
    company:{
        type:String
    },
    sub_product:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'sub_product'
    }
})

module.exports = mongoose.model('Product',product_schema)   
