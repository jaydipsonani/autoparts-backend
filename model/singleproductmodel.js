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
            stock:{
                type:String
            },
            rating:{
                type:String
            },
            image:{
                type:String
            },
            category:{
                type:String
            },
            brand:{
                type:String
            },
            product_id : {
                type: mongoose.Schema.Types.ObjectId, 
                ref : "Product"
            }
})

module.exports = mongoose.model('single_product',product_schema)