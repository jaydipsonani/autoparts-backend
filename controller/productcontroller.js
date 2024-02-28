var product = require('../model/productmodel')

exports.add_product = async (req, res) => {

var img = await req.files.length
var images = "";

for(var ind=0;ind<img;ind++) {
    var images = images+','+req.files[ind].originalname
}
req.body.image = images;

    var data = await product.create(req.body)
 
    res.status(200).json({
        status: 'success',
        data
    })
}

exports.view_product =  async (req, res) => {

    var data = await product.find()
    res.status(200).json({
        status:'sucess',
        data
    })
    
}

exports.update_product = async (req, res) => {

    var v_id = req.params.id;
    
    var data = await product.findByIdAndUpdate(v_id, req.body)
    console.log('req.body', req.body)
    console.log('data',data)
    res.status(200).json({
        status:'successfully updated'
    })
}

exports.delete_product = async (req, res) => {

    var v_id = req.params.id;
    
    var data = await product.findByIdAndDelete(v_id, req.body)
console.log('req.body', req.body)
    res.status(200).json({
        status:'successfully deleted'
    })
}