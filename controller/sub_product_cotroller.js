var product_model = require('../model/sub_product_model');

exports.insert_product = async (req, res) => {

    var data = await product_model.create(req.body);

    res.status(200).json({
        status: 'insert successfully',
        data
    });

}
exports.get_product = async (req, res) => {

    var data = await product_model.find().populate("base_product_id");

    res.status(200).json({
        status: 'successfully',
        data
    });

}