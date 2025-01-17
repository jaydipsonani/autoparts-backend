var product = require('../model/productmodel')

exports.add_product = async (req, res) => {


    var data = await product.create(req.body)

    req.body.image = req.file.originalname;

    res.status(200).json({
        status: 'success',
        data
    })
}

exports.view_product = async (req, res) => {

    var data = await product.find().populate("sub_product")
    res.status(200).json({
        status: 'sucess',
        data
    })

}
exports.update_product = async (req, res) => {

    var v_id = req.params.id;

    var data = await product.findByIdAndUpdate(v_id, req.body)
    console.log('req.body', req.body)
    console.log('data', data)
    res.status(200).json({
        status: 'successfully updated'
    })
}

exports.delete_product = async (req, res) => {

    var v_id = req.params.id;
    var data = await product.findByIdAndDelete(v_id, req.body)

    res.status(200).json({
        status: 'successfully deleted'
    })
}