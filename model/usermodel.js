var mongoose = require('mongoose')

var register_schema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    },

})

module.exports = mongoose.model('register', register_schema)